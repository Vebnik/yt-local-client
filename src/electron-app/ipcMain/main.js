const { ipcMain } = require('electron')
const { getSearchResults } = require('../yt-search/ytSearchLogic')
const { starting } = require("../yt-dl-core-mpv/playerStart");
const { getChannelVid, getAllChannelVid } = require('../yt-pl-ch/getChannelVideo')
const { saveChannel, getChannel } = require('../sqlite3Db/saveGetChannelData')


const ipcHandler = () => {
	ipcMain.handle('dialog:search', async (event, args) => {
		return await getSearchResults(args)
	})

	ipcMain.handle('dialog:playMedia', async (event, args) => {
		await starting(args)
	})

	ipcMain.handle('dialog:AddChannel', async (event, args) => {
		await getChannelVid(args).then(channelModel => {
			console.log('In contextBridge getChannelVid: ', channelModel)
			saveChannel(channelModel)
		})
	})

	ipcMain.handle('dialog:getChannel', async (event, args) => {
		return getChannel()
	})

	ipcMain.handle('dialog:getChannelVideo', async (event, args) => {
		return getAllChannelVid(args)
	})
}

module.exports = { ipcHandler }