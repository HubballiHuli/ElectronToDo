const electron = require('electron');

const {app,BrowserWindow,Menu} = electron;
const menus = require('./partials/menus/menu.js');

let appWindow = null;
function createAppWindow(){
    appWindow = new BrowserWindow({});
    appWindow.loadFile('./views/index.html');
    mainMenu = Menu.buildFromTemplate(menus.mainMenuTemplate)
    appWindow.setMenu(mainMenu)
}

app.on('ready',createAppWindow);