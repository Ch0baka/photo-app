#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

export PATH="$HOME/.local/bin:$PATH"

PID_FILE="$ROOT_DIR/.app.pid"
LOG_FILE="$ROOT_DIR/.app.log"
PORT=5173
APP_URL="http://127.0.0.1:${PORT}/"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Error: No se encontró 'node' o 'npm' en el PATH ($PATH)." >&2
  exit 1
fi

# Verificar si ya existe un proceso activo por PID o puerto
if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID="$(cat "$PID_FILE" 2>/dev/null || true)"
  if [[ -n "$EXISTING_PID" ]] && kill -0 "$EXISTING_PID" 2>/dev/null; then
    echo "La aplicación ya está en ejecución (PID: $EXISTING_PID) en $APP_URL"
    exit 0
  fi
  rm -f "$PID_FILE"
fi

if lsof -iTCP:"$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  PORT_PID="$(lsof -iTCP:"$PORT" -sTCP:LISTEN -t | head -n 1)"
  echo "Ya hay un proceso escuchando en el puerto $PORT (PID: $PORT_PID)."
  echo "Usa ./stop.sh antes de volver a iniciar."
  exit 1
fi

if [[ ! -d "$ROOT_DIR/node_modules" ]]; then
  echo "Instalando dependencias..."
  npm install
fi

echo "Iniciando servidor local (seed + Vite)..."
nohup npm run dev >"$LOG_FILE" 2>&1 < /dev/null &
APP_PID=$!
echo "$APP_PID" > "$PID_FILE"

# Esperar hasta 20 segundos a que el puerto 5173 responda
READY=0
for _ in $(seq 1 40); do
  if ! kill -0 "$APP_PID" 2>/dev/null; then
    echo "Error: El proceso de la aplicación terminó inesperadamente." >&2
    echo "Últimas líneas de $LOG_FILE:" >&2
    tail -n 20 "$LOG_FILE" >&2 || true
    rm -f "$PID_FILE"
    exit 1
  fi

  if lsof -iTCP:"$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
    READY=1
    break
  fi
  sleep 0.5
done

if [[ "$READY" -eq 1 ]]; then
  echo "Aplicación iniciada correctamente."
  echo "  URL:  $APP_URL"
  echo "  PID:  $APP_PID"
  echo "  Logs: $LOG_FILE"
  echo "Para detenerla ejecuta: ./stop.sh"
else
  echo "Advertencia: El servidor aún no responde en $APP_URL (PID: $APP_PID)."
  echo "Revisa los logs en $LOG_FILE."
fi
