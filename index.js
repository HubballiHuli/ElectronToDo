const electron = require('electron');

const {app,BrowserWindow,Menu} = electron;

let appWindow = null;
let addNewTodoWindow = null;
function createAppWindow(){
    appWindow = new BrowserWindow({});
    appWindow.loadFile('index.html');
    mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    appWindow.setMenu(mainMenu)
}

//Function to create a new window to add new todo
function createAddNewToDoWindow(){
    addNewTodoWindow = new BrowserWindow({height:200,width:300});
    addNewTodoWindow.loadFile('addNewToDo.html');
    
}


let mainMenuTemplate = [
    {
        label:"ToDo",
        submenu:[
            {
                label:"Add ToDo",
                accelerator:(process.platform == 'darwin') ? "Command+Shift+A" : "Control+Shift+A",
                click(){
                    createAddNewToDoWindow();
                }
            },
            {
                label:"Remove ToDo"
            }
        ],
    }
];
app.on('ready',createAppWindow);