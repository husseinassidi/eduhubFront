const { app, BrowserWindow } = require('electron');
const path = require('path');
const remoteMain = require('@electron/remote/main');

remoteMain.initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'), // If you have a preload script
    },
  });

  // Load the React application
  win.loadURL('http://localhost:3000'); // Ensure this URL matches your React development server
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
