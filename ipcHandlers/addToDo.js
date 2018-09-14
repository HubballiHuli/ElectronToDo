const electron = require('electron');
const {ipcMain} = electron;
const globals = require('../globals.js');

exports.addNewToDo = function(e,data){
    console.log(data);
    console.log(globals.appWindow.webContents.send);
    globals.appWindow.webContents.send('newToDo',data);
    globals.addNewTodoWindow.close();
};

