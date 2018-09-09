const {BrowserWindow} = require('electron')

exports.createAddNewToDoWindow = function(){
    addNewTodoWindow = new BrowserWindow({height:200,width:300});
    addNewTodoWindow.loadFile('./views/addNewToDo.html');
    addNewTodoWindow.on('closed',()=>{addNewTodoWindow = null});
    
}