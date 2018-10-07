const app = require('express')()
const server = require('http').Server(app)
const calc = require('./calc')

let serverStatus = false
const start = () => {
  if (!serverStatus) {
    console.log('server starting...')
    serverStatus = true
    server.listen(3000, () => console.log('listening on *:3000'))
    calc.start()
  }
}
const stop = () => {
  if (serverStatus) {
    calc.stop()
    server.close()
    serverStatus = false
    console.log('server stopped')
  }
}

document.getElementById('start').onclick = start
document.getElementById('stop').onclick = stop
