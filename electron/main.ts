import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let win: BrowserWindow;

app.on('ready', () => {
	console.log('App is ready');

});


function createWindow () {
	win = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js")
		}

	});

	win.loadURL('http://localhost:3000');
	win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') { app.quit() }
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) { createWindow() }
});

ipcMain.on('toMain', async (channel, message) => {  
	win.webContents.send('fromMain', message)
});