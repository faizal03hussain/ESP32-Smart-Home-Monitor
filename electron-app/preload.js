const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendData: (data) => ipcRenderer.send('insert-data', data),
});
