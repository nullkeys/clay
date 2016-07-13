const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    //win.setMenu(null);
    win.loadURL(`file://${__dirname}/index.html`);
    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
    
    require('./main/routing')(win);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if(win === null)
        createWindow();
})
