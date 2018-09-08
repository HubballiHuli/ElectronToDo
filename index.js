const electron = require('electron');

const {app,BrowserWindow,Menu} = electron;
const menus = require('./partials/menus/menu.js');

let appWindow = null;
let addNewTodoWindow = null;
function createAppWindow(){
    appWindow = new BrowserWindow({});
    appWindow.loadFile('./views/index.html');
    mainMenu = Menu.buildFromTemplate(menus.mainMenuTemplate)
    appWindow.setMenu(mainMenu)
}

//Function to create a new window to add new todo
function createAddNewToDoWindow(){
    addNewTodoWindow = new BrowserWindow({height:200,width:300});
    addNewTodoWindow.loadFile('./views/addNewToDo.html');
    
}


// let mainMenuTemplate = [
//     {
//         label:"ToDo",
//         submenu:[
//             {
//                 label:"Add ToDo",
//                 accelerator:(process.platform == 'darwin') ? "Command+Shift+A" : "Control+Shift+A",
//                 click(){
//                     createAddNewToDoWindow();
//                 }
//             },
//             {type:'separator'},
//             {
//                 label:"Remove ToDo"
//             }
//         ],
//     }
// ];
app.on('ready',createAppWindow);