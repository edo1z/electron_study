const {app, BrowserWindow} = require('electron');

let win;

function createWin() {
  win = new BrowserWindow({width: 500, height: 500});
  win.loadFile('index.html');
  win.webContents.openDevTools();
  win.on('closed', () => win = null);
}

app.on('ready', createWin);
app.on('window-all-closed', () => app.quit());
app.on('activate', () => {
  if (win === null) createWin();
})
