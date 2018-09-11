const {BrowserWindow} = require('electron');
const globals = require('../globals.js');

exports.createAddNewToDoWindow = function(){
    globals.addNewTodoWindow = new BrowserWindow({height:200,width:300});
    globals.addNewTodoWindow.loadFile('./views/addNewToDo.html');
    globals.addNewTodoWindow.on('closed',()=>{globals.addNewTodoWindow = null});
    
}