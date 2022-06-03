// import
const { BrowserWindow, app } = require('electron')
const path = require("path");
const { ipcHandler } = require('./ipcMain/main')


// logic
class StartElectron {

	#rootHtml = './src/electronLogic/rootHtml/index.html'
	#testing = 'http://localhost:3000'
	#typeApp

	constructor(type) {
		this.#typeApp = type
		this.#eventHandler()
	}

	#createWindow() {
		const win = new BrowserWindow({
			webPreferences:{
				contextIsolation: true,
				nodeIntegration: true,
				devTools: true,
				preload: path.join(__dirname, 'ipcMain', 'preload.js')
			},
			autoHideMenuBar: true,
			resizable: false,
			width: 1362,
			height: 900,
			frame: false,
		})

		switch (this.#typeApp) {
			case 'prod': win.loadFile(this.#rootHtml).catch(err => console.error(err))
				break
			case 'test': win.loadURL(this.#testing).catch(err => console.error(err))
				break
		}
	}

	#eventHandler() {
		app.whenReady().then(() => {this.#createWindow(); ipcHandler()})
		app.on('window-all-closed', ev => app.quit())
	}

}

module.exports = { StartElectron }