const { BrowserWindow, app, Menu, screen, ipcMain, Notification } = require('electron');
const path = require('path');
const debug = require('electron-debug') // Required to launch developer tools when no menu present

const isDev = !app.isPackaged;

Menu.setApplicationMenu(false)

debug(); // Auto-launch developer tools - comment out when not needed

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    x: 1530,
    y: 0, 
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notifiation', body: message}).show();
})

app.whenReady().then(createWindow)