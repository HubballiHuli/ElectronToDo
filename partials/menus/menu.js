let windows = require('../windows.js');
exports.mainMenuTemplate = [
    {
        label:"ToDo",
        submenu:[
            {
                label:"Add ToDo",
            
                accelerator:(process.platform == 'darwin') ? "Command+Shift+A" : "Control+Shift+A",
                click(){
                    windows.createAddNewToDoWindow();
                }
            },
            {type:'separator'},
            {
                label:"Remove ToDo"
            }
        ],
    }
];

function createAddNewToDoWindow(){
    addNewTodoWindow = new BrowserWindow({height:200,width:300});
    addNewTodoWindow.loadFile('./views/addNewToDo.html');
    
}