# Servidor básico en Node.js

Este proyecto crea un servidor HTTP utilizando Node.js, que sirve archivos estáticos como HTML, CSS, JavaScript, imágenes, y otros formatos.

## Estructura del proyecto

- `server.js`: Contiene el código del servidor.
- `public/cotizador-hogar`: Directorio donde se almacenan los archivos estáticos que se sirven al cliente (por ejemplo, `index.html`, `.css`, `.js`, imágenes, etc.).
- `README.md`: Este archivo con la descripción del proyecto.

## Funcionalidades

- El servidor responde a solicitudes HTTP GET.
- Sirve diferentes tipos de archivos estáticos basados en la URL solicitada.
- Soporta los siguientes tipos de archivos:
  - HTML
  - JavaScript
  - CSS
  - JSON
  - Imágenes (PNG, JPG, GIF)
  - Audio (WAV)
  
## Cómo ejecutar el servidor

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
2. Clona este repositorio.
3. Abre una terminal en el directorio raíz del proyecto.
4. Ejecuta el siguiente comando para iniciar el servidor:

   ```bash
   node server.js
   ```

5. Abre tu navegador y accede a `http://localhost:3000` para ver el servidor en funcionamiento.

## Créditos

Este proyecto es parte de una demostración educativa para servir archivos estáticos con Node.js y HTTP.
