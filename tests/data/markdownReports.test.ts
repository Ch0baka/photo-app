import { describe, expect, it } from 'vitest';
import { parseReportMarkdown } from '../../src/data/markdownReports.ts';
import { loadReportsModule } from '../../src/data/reports-content.ts';
import type { TableBlockPayload } from '../../src/core/types.ts';

describe('parseReportMarkdown & loadReportsModule', () => {
  it('parses frontmatter, headings, lists, callouts, and markdown tables cleanly', () => {
    const sample = `---
slug: rep-demo-test
title: "Reporte Demo"
subtitle: "Subtitulo demo"
chapterNumber: 3
dateLabel: "Dic 2026"
---

## Seccion principal

Texto con **negrita** y \`codigo\` y [enlace](https://example.com).

> [!NOTE] Nota importante
> Detalle tecnico relevante.

| Col A | Col B |
| :--- | :--- |
| Dato 1 | Dato 2 |
`;

    const parsed = parseReportMarkdown(sample, 'rep-fallback', 1);
    expect(parsed.chapter.slug).toBe('rep-demo-test');
    expect(parsed.chapter.chapterNumber).toBe(3);
    expect(parsed.chapter.pdfPages).toBe('Dic 2026');
    expect(parsed.blocks.map((b) => b.blockType)).toEqual([
      'heading',
      'paragraph',
      'callout_tip',
      'table',
    ]);
    const tableBlock = parsed.blocks[3].payload as TableBlockPayload;
    expect(tableBlock.headers).toEqual(['Col A', 'Col B']);
    expect(tableBlock.rows).toEqual([['Dato 1', 'Dato 2']]);
  });

  it('loads public report chapters neutrally without personal camera references', () => {
    const reports = loadReportsModule();
    expect(reports.chapters.length).toBeGreaterThanOrEqual(1);

    const sonyReport = reports.chapters.find(
      (c) => c.slug === 'rep-1-camaras-sony-alpha-mirrorless'
    );
    expect(sonyReport).toBeDefined();
    expect(sonyReport?.chapterNumber).toBe(1);

    const blocks = reports.blocksByChapter[1];
    expect(blocks.length).toBeGreaterThan(15);

    const serialized = JSON.stringify(blocks);
    expect(serialized).not.toMatch(/\btu cámara\b/i);
    expect(serialized).not.toMatch(/\btu equipo\b/i);
    expect(serialized).not.toMatch(/\btu Sony\b/i);
    expect(serialized).not.toMatch(/\btu α7 IV\b/i);

    const tables = blocks.filter((b) => b.blockType === 'table');
    expect(tables.length).toBe(8);
    for (const tb of tables) {
      const tablePayload = tb.payload as TableBlockPayload;
      for (const row of tablePayload.rows) {
        for (const cell of row) {
          expect(cell).not.toContain('**');
          expect(cell).not.toContain('`');
        }
      }
    }
  });
});
