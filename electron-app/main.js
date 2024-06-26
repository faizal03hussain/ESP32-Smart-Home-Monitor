const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

let mainWindow;
let db;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  db = new sqlite3.Database('./data/home_monitor.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the home monitor database.');
  });

  db.run(`CREATE TABLE IF NOT EXISTS sensor_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    temperature REAL,
    humidity REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('insert-data', (event, data) => {
  const { temperature, humidity } = data;
  db.run(`INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)`, [temperature, humidity], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) inserted ${this.changes}`);
  });
});
