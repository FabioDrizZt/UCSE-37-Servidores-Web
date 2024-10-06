// Importa el módulo 'http' que permite crear un servidor web
const http = require('http')

// Importa el módulo 'fs' que permite interactuar con el sistema de archivos
const fs = require('fs')

// Importa el módulo 'path' para trabajar con rutas de archivos de manera segura
const path = require('path')

// Crea el servidor utilizando el método createServer, el cual recibe una función callback que maneja las solicitudes (req) y las respuestas (res)
const server = http.createServer((req, res) => {
  // Define la ruta completa del archivo que se va a servir, utilizando el directorio actual (__dirname),
  // la carpeta 'public/cotizador-hogar', y evalúa si la URL es la raíz ('/') para devolver 'index.html' o el archivo solicitado
  const filePath = path.join(__dirname, 'public', 'cotizador-hogar', req.url === '/' ? 'index.html' : req.url)

  // Obtiene la extensión del archivo solicitado (por ejemplo, .html, .js, .css) para determinar el tipo de contenido
  const extname = path.extname(filePath)

  // Por defecto, se establece el tipo de contenido como HTML
  let contentType = 'text/html'

  // Un switch que cambia el tipo de contenido según la extensión del archivo
  switch (extname) {
    case '.js':
      contentType = 'text/javascript' // Si es un archivo .js, el tipo de contenido será JavaScript
      break
    case '.css':
      contentType = 'text/css' // Si es un archivo .css, el tipo de contenido será CSS
      break
    case '.json':
      contentType = 'application/json' // Si es un archivo .json, el tipo de contenido será JSON
      break
    case '.png':
      contentType = 'image/png' // Si es un archivo .png, el tipo de contenido será una imagen PNG
      break
    case '.jpg':
      contentType = 'image/jpg' // Si es un archivo .jpg, el tipo de contenido será una imagen JPG
      break
    case '.gif':
      contentType = 'image/gif' // Si es un archivo .gif, el tipo de contenido será una imagen GIF
      break
    case '.wav':
      contentType = 'audio/wav' // Si es un archivo .wav, el tipo de contenido será un archivo de audio WAV
      break
  }

  // Lee el archivo desde el sistema de archivos
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Si ocurre un error, envía un estado 500 (Error del servidor) y muestra el código del error
      res.writeHead(500)
      res.end(`Server Error: ${err.code}`)
    } else {
      // Si no hay error, envía un estado 200 (OK) junto con el tipo de contenido correcto
      res.writeHead(200, { 'Content-Type': contentType })
      // Envía el contenido del archivo al cliente, codificado en 'utf8'
      res.end(data, 'utf8')
    }
  })
})

// Define el puerto en el que el servidor va a escuchar las solicitudes (puerto 3000)
const PORT = 3000

// El servidor comienza a escuchar en el puerto definido y se muestra un mensaje en la consola indicando que el servidor está iniciado
server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
