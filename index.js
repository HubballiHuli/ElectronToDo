const electron = require('electron');
const ipcHandlers = require('./ipcHandlers/addToDo.js');
const globals = require('./globals.js');

const {app,BrowserWindow,Menu,ipcMain} = electron;
const menus = require('./partials/menus/menu.js');

globals.appWindow = null;
function createAppWindow(){
    globals.appWindow = new BrowserWindow({});
    globals.appWindow.loadFile('./views/index.html');
    globals.appWindow.toggleDevTools();
    mainMenu = Menu.buildFromTemplate(menus.mainMenuTemplate)
    globals.appWindow.setMenu(mainMenu)
}

ipcMain.on('newToDo',ipcHandlers.addNewToDo);

app.on('ready',createAppWindow);