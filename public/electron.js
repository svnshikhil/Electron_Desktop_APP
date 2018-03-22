const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const autoUpdater = require('electron-updater').autoUpdater;
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
autoUpdater.checkForUpdatesAndNotify()
function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680, icon: path.join(__dirname, './icon.png')});
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);
}
let server = require('./db/server')
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});