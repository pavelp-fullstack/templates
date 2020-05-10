import { app, BrowserWindow } from 'electron';

import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

import path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

if (process.env.HMR_DEBUG === '1') debugger;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.HMR_DEBUG) {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    const startp = path.join(process.cwd(), 'dist/app/index.html');
    mainWindow.loadURL(
      url.format({
        pathname: startp,
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  // installExtension(REACT_PERF)
  //   .then((name) => console.log(`Added Extension:  ${name}`))
  //   .catch((err) => console.log('An error occurred: ', err));

  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;
