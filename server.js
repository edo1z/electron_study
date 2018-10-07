const app = require('express')()
const server = require('http').Server(app)
const calc = require('./calc')

let serverStatus = false
const start = () => {
  if (!serverStatus) {
    console.log('server starting...')
    route(app)
    serverStatus = true
    server.listen(3000, () => console.log('listening on *:3000'))
    calc.start()
  }
}
const route = (app) => {
  app.get('/', function(req, res){
    res.sendFile(__dirname + '/client.html');
  });
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
