const http = require('http') // <- Importamos el modulo http
const app = require('./app') // <- Importamos nuestra "app" desde el archivo app.js

// Nos aseguramos de que tenemos un puerto valido
const normalizePort = val => {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

// Fijamos un puerto
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

// Gestion de error
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error
  }
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.')
      process.exit(1)
      break
    default:
      throw error
  }
}

// Creacion de un servidor (sobre el proticolo http)
const server = http.createServer(app)

// Cuando el servidor esta encendido si hay error la gestionamos sino mostramos en consola el puerto escuchado
server.on('error', errorHandler)
server.on('listening', () => {
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port
  console.log('Listening on ' + bind)
})

// Escuchamos a nuestro puerto definido
server.listen(port)