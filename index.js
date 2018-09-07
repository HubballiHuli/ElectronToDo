const electron = require('electron');

const {app,BrowserWindow} = electron;

let appWindow = null;

function createAppWindow(){
    appWindow = new BrowserWindow({});
    appWindow.loadFile('index.html');
}

app.on('ready',createAppWindow);