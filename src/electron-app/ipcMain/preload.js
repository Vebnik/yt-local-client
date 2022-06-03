const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('YtSearchApi', {
	search: (title) => ipcRenderer.invoke('dialog:search', title)
})

contextBridge.exposeInMainWorld('YtPlayApi', {
	playMedia: (url) => ipcRenderer.invoke('dialog:playMedia', url)
})

contextBridge.exposeInMainWorld('YtChannelApi', {
	AddChannel: (channelId) => ipcRenderer.invoke('dialog:AddChannel', channelId),
	GetChannel: () => ipcRenderer.invoke('dialog:getChannel'),
	GetChannelVideo: (channelId) => ipcRenderer.invoke('dialog:getChannelVideo', channelId),
})

