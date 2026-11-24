#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$ROOT_DIR/.app.pid"
PORT=5173
STOPPED=0

terminate_pid_tree() {
  local target_pid="$1"
  local children
  children="$(pgrep -P "$target_pid" 2>/dev/null || true)"
  for child in $children; do
    terminate_pid_tree "$child"
  done

  if kill -0 "$target_pid" 2>/dev/null; then
    kill -TERM "$target_pid" 2>/dev/null || true
    for _ in $(seq 1 10); do
      if ! kill -0 "$target_pid" 2>/dev/null; then
        break
      fi
      sleep 0.2
    done
    if kill -0 "$target_pid" 2>/dev/null; then
      kill -KILL "$target_pid" 2>/dev/null || true
    fi
  fi
}

if [[ -f "$PID_FILE" ]]; then
  APP_PID="$(cat "$PID_FILE" 2>/dev/null || true)"
  if [[ -n "$APP_PID" ]] && kill -0 "$APP_PID" 2>/dev/null; then
    echo "Deteniendo aplicación (PID: $APP_PID)..."
    terminate_pid_tree "$APP_PID"
    STOPPED=1
  fi
  rm -f "$PID_FILE"
fi

# Limpieza de respaldo por si quedó algún proceso escuchando en el puerto 5173
PORT_PIDS="$(lsof -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null || true)"
if [[ -n "$PORT_PIDS" ]]; then
  for pid in $PORT_PIDS; do
    echo "Deteniendo proceso residual en puerto $PORT (PID: $pid)..."
    terminate_pid_tree "$pid"
    STOPPED=1
  done
fi

if [[ "$STOPPED" -eq 1 ]]; then
  echo "Servidor detenido correctamente."
else
  echo "No había ningún servidor activo en ejecución."
fi
