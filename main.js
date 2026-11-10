// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow(page) {
  // Create a new BrowserWindow instance
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: true,
    webPreferences: {
      nodeIntegration: true,  // Allows the use of Node.js modules in renderer
      contextIsolation: false,  // Set to false for compatibility with legacy code
    }
  });

  // Load the specified page
  mainWindow.loadFile(page);  // Dynamically load the page based on the parameter

  // Event listener when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// When Electron is ready, create the first window (index.html)
app.whenReady().then(() => {
  createWindow('index.html');  // Start by loading the index.html page
});

// Quit when all windows are closed (especially for macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate window if app is activated (for macOS behavior)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow('index.html');  // Reopen index.html if app is activated
  }
});
