---
description: Estándares de arquitectura, diseño UI/UX, seguridad local y bucle de verificación obligatorio.
trigger: always_on
---

# Invariantes y Reglas de Ingeniería

## 1. Metodología de Trabajo y Bucle de Verificación
- **Planificación previa:** Para cualquier cambio que afecte a más de un archivo, propón primero un plan breve de ejecución y espera confirmación antes de modificar el código.
- **Cierre determinista (Auto-verificación):** Ninguna tarea de código está terminada hasta que hayas ejecutado el verificador de tipos (`tsc --noEmit` o equivalente) y los tests correspondientes en la terminal integrada, comprobando que retornan código de salida `0` (sin errores).
- **Lectura de errores:** Si un test o compilación falla, lee el `stderr`, corrige la causa raíz y vuelve a ejecutar la prueba automáticamente antes de reportar el resultado al usuario.
- **Cambios atómicos:** Modifica únicamente los archivos estrictamente necesarios para cumplir el objetivo actual. No realices refactorizaciones cosméticas en archivos no solicitados.

## 2. Arquitectura y Calidad de Código
- **Principio de simplicidad (Zero-Bloat):** Prioriza APIs nativas del lenguaje y del navegador. **Prohibido** instalar nuevas librerías o paquetes en `package.json` / `requirements.txt` sin justificación técnica y autorización explícita del usuario.
- **Separación de responsabilidades:** Mantén la lógica de negocio y el acceso a datos (`SQLite` / `JSON`) estrictamente separados de la capa de interfaz de usuario.
- **Tipado y validación:** No utilices el tipo `any` en TypeScript. Valida siempre las entradas de datos y maneja los errores de forma explícita (bloques `try/catch` con mensajes de error claros y trazables en consola o log).
- **Código autodocumentado:** Usa nombres de variables y funciones descriptivos en inglés. Evita comentarios obvios que expliquen *qué* hace el código; comenta únicamente el *porqué* cuando exista una decisión de diseño no evidente.

## 3. Diseño de Interfaz (UI/UX)
- **Estética:** Todo desarrollo visual debe seguir una línea moderna, minimalista, limpia, sobria y profesional.
- **Jerarquía visual:** Prioriza la legibilidad, el uso adecuado del espacio en blanco (padding/margin consistente), contrastes suaves pero accesibles y tipografías sin serifa limpias (ej. Inter, System UI, JetBrains Mono para datos técnicos).
- **Evitar recarga visual:** Sin animaciones innecesarias, gradientes estridentes ni elementos decorativos que no aporten funcionalidad directa al usuario.

## 4. Seguridad y Entorno Local
- **Aislamiento de rutas:** Opera exclusivamente dentro del directorio raíz del proyecto. No modifiques archivos de configuración globales del sistema operativo (`~/.zshrc`, `~/.ssh`, etc.).
- **Protección de datos:** Nunca expongas credenciales, tokens o llaves de API en el código fuente. Utiliza variables de entorno (`.env.local`) y asegúrate de que estén incluidas en `.gitignore`.
- **Operaciones destructivas:** Solicita siempre confirmación antes de ejecutar comandos destructivos como `rm -rf`, `DROP TABLE` o `git reset --hard`.
