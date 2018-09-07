const electron = require('electron');

const {app,BrowserWindow,Menu} = electron;

let appWindow = null;

function createAppWindow(){
    appWindow = new BrowserWindow({});
    appWindow.loadFile('index.html');
    mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    appWindow.setMenu(mainMenu)
}


let mainMenuTemplate = [
    {
        label:"ToDo",
        submenu:[
            {
                label:"Add ToDo",
            },
            {
                label:"Remove ToDo"
            }
        ],
    }
];
app.on('ready',createAppWindow);