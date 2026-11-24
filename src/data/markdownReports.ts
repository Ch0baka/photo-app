import type {
  ChapterSummary,
  ExifMetadata,
  HeadingBlockPayload,
  TextSegment,
} from '../core/types.ts';
import type { SeedBlockInput } from './book1-content.ts';

export interface ReportFrontmatter {
  slug: string;
  title: string;
  subtitle: string;
  chapterNumber?: number;
  estimatedReadMin?: number;
  dateLabel?: string;
}

export interface ParsedReportChapter {
  chapter: Omit<ChapterSummary, 'id' | 'moduleId' | 'isCompleted'>;
  blocks: SeedBlockInput[];
  assets: Array<ExifMetadata & { chapterNumber: number }>;
}

const SLUG_TOKEN_REGEX = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export function slugifyAnchor(raw: string): string {
  return raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'seccion';
}

export function parseInlineSegments(input: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(SLUG_TOKEN_REGEX)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      segments.push({ text: input.slice(lastIndex, idx) });
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      segments.push({ text: token.slice(2, -2), bold: true });
    } else if (token.startsWith('*') && token.endsWith('*')) {
      segments.push({ text: token.slice(1, -1), italic: true });
    } else if (token.startsWith('`') && token.endsWith('`')) {
      segments.push({ text: token.slice(1, -1), code: true });
    } else if (token.startsWith('[')) {
      const closeBracket = token.indexOf('](');
      if (closeBracket > 0 && token.endsWith(')')) {
        const label = token.slice(1, closeBracket);
        const url = token.slice(closeBracket + 2, -1);
        segments.push({ text: label, linkUrl: url });
      } else {
        segments.push({ text: token });
      }
    }

    lastIndex = idx + token.length;
  }

  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ text: input }];
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
}

function splitTableRow(line: string, stripFormatting = false): string[] {
  const trimmed = line.trim();
  const stripped = trimmed.replace(/^\|/, '').replace(/\|$/, '');
  return stripped.split('|').map((cell) => {
    const clean = cell.trim();
    return stripFormatting ? stripInlineMarkdown(clean) : clean;
  });
}

function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|')) return false;
  const cells = splitTableRow(trimmed);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function parseFrontmatter(raw: string): { meta: Partial<ReportFrontmatter>; body: string } {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { meta: {}, body: normalized };
  }

  const endMarker = normalized.indexOf('\n---\n', 4);
  if (endMarker === -1) {
    return { meta: {}, body: normalized };
  }

  const headerLines = normalized.slice(4, endMarker).split('\n');
  const meta: Partial<ReportFrontmatter> = {};

  for (const line of headerLines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawValue = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');

    if (key === 'slug') meta.slug = rawValue;
    else if (key === 'title') meta.title = rawValue;
    else if (key === 'subtitle') meta.subtitle = rawValue;
    else if (key === 'dateLabel' || key === 'date' || key === 'label') meta.dateLabel = rawValue;
    else if (key === 'chapterNumber') {
      const parsed = Number.parseInt(rawValue, 10);
      if (Number.isFinite(parsed)) meta.chapterNumber = parsed;
    } else if (key === 'estimatedReadMin') {
      const parsed = Number.parseInt(rawValue, 10);
      if (Number.isFinite(parsed) && parsed > 0) meta.estimatedReadMin = parsed;
    }
  }

  return { meta, body: normalized.slice(endMarker + 5) };
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}

export function parseReportMarkdown(
  rawMarkdown: string,
  fallbackSlug: string,
  defaultChapterNumber: number
): ParsedReportChapter {
  const { meta, body } = parseFrontmatter(rawMarkdown);
  const chapterNumber = meta.chapterNumber ?? defaultChapterNumber;
  const slug = meta.slug || fallbackSlug;
  const title = meta.title || fallbackSlug;
  const subtitle = meta.subtitle || 'Investigación y análisis técnico fotográfico';
  const dateLabel = meta.dateLabel || 'Reporte';

  const lines = body.split('\n');
  const blocks: SeedBlockInput[] = [];
  const assets: Array<ExifMetadata & { chapterNumber: number }> = [];
  const usedAnchors = new Set<string>();

  const reserveAnchor = (text: string): string => {
    const base = slugifyAnchor(text);
    let candidate = base;
    let suffix = 2;
    while (usedAnchors.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }
    usedAnchors.add(candidate);
    return candidate;
  };

  let i = 0;
  let assetIndex = 1;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line || line === '---') {
      i += 1;
      continue;
    }

    // Headings (## or ###)
    const headingMatch = /^(#{2,3})\s+(.+)$/.exec(line);
    if (headingMatch) {
      const level: 2 | 3 = headingMatch[1].length === 3 ? 3 : 2;
      const text = headingMatch[2].trim();
      const anchor = reserveAnchor(text);
      const payload: HeadingBlockPayload = { level, text, anchor };
      blocks.push({ sectionAnchor: anchor, blockType: 'heading', payload });
      i += 1;
      continue;
    }

    // Standalone image: ![alt](path) or ![alt](path) "caption"
    const imageMatch = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/.exec(line);
    if (imageMatch) {
      const altText = imageMatch[1].trim() || title;
      const filePath = imageMatch[2].trim();
      const caption = imageMatch[3]?.trim();
      const assetId = `${slug}-img-${assetIndex}`;
      assetIndex += 1;

      assets.push({
        id: assetId,
        chapterNumber,
        filePath,
        altText,
        caption,
      });
      blocks.push({
        blockType: 'image_card',
        payload: { assetId, layout: 'wide' },
      });
      i += 1;
      continue;
    }

    // Markdown Table
    if (
      line.includes('|') &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = splitTableRow(line, true);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length) {
        const rowLine = lines[i].trim();
        if (!rowLine || !rowLine.includes('|')) break;
        const cells = splitTableRow(rowLine, true);
        while (cells.length < headers.length) cells.push('');
        rows.push(cells.slice(0, headers.length));
        i += 1;
      }

      let footnote: string | undefined;
      if (i < lines.length) {
        const nextLine = lines[i].trim();
        const noteMatch = /^\*Nota:\s*(.+)\*$/.exec(nextLine);
        if (noteMatch) {
          footnote = noteMatch[1].trim();
          i += 1;
        }
      }

      blocks.push({
        blockType: 'table',
        payload: { headers, rows, footnote },
      });
      continue;
    }

    // Callout / Quote block (>)
    if (line.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }

      const calloutHeader = /^\[!(TIP|NOTE|IMPORTANT)\]\s*(.*)$/i.exec(quoteLines[0] ?? '');
      if (calloutHeader) {
        const calloutTitle = calloutHeader[2].trim() || 'Nota técnica';
        const items: TextSegment[][] = quoteLines
          .slice(1)
          .filter((ql) => ql.trim().length > 0)
          .map((ql) => parseInlineSegments(ql.replace(/^[-*]\s+/, '')));
        blocks.push({
          blockType: 'callout_tip',
          payload: {
            title: calloutTitle,
            items: items.length > 0 ? items : [[{ text: calloutTitle }]],
          },
        });
      } else {
        const lastLine = quoteLines[quoteLines.length - 1] ?? '';
        const authorMatch = /^—\s*(.+)$/.exec(lastLine);
        const author = authorMatch ? authorMatch[1].trim() : 'Informe técnico';
        const contentLines = authorMatch ? quoteLines.slice(0, -1) : quoteLines;
        blocks.push({
          blockType: 'quote',
          payload: {
            quote: contentLines.join(' ').trim(),
            author,
          },
        });
      }
      continue;
    }

    // Bullet or Ordered Lists (- / * / 1.)
    if (/^(?:[-*]|\d+\.)\s+/.test(line)) {
      const items: TextSegment[][] = [];
      while (i < lines.length && /^(?:[-*]|\d+\.)\s+/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^(?:[-*]|\d+\.)\s+/, '');
        items.push(parseInlineSegments(itemText));
        i += 1;
      }
      blocks.push({
        blockType: 'list',
        payload: { items },
      });
      continue;
    }

    // Paragraph (coalesces contiguous non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length) {
      const cur = lines[i].trim();
      if (
        !cur ||
        cur === '---' ||
        /^#{2,3}\s+/.test(cur) ||
        cur.startsWith('>') ||
        /^(?:[-*]|\d+\.)\s+/.test(cur) ||
        /^!\[[^\]]*\]\([^)]+\)$/.test(cur) ||
        (cur.includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
      ) {
        break;
      }
      paraLines.push(cur);
      i += 1;
    }

    if (paraLines.length > 0) {
      blocks.push({
        blockType: 'paragraph',
        payload: { segments: parseInlineSegments(paraLines.join(' ')) },
      });
    } else {
      i += 1;
    }
  }

  return {
    chapter: {
      slug,
      chapterNumber,
      title,
      subtitle,
      estimatedReadMin: meta.estimatedReadMin ?? estimateReadingMinutes(body),
      pdfPages: dateLabel,
      isIngested: true,
    },
    blocks,
    assets,
  };
}
