export const ytSearch = async (title) => {
	return await window.YtSearchApi.search(title)
}

export const playMedia = async (url) => {
	return await window.YtPlayApi.playMedia(url)
}

export const AddChannel = async (channelId) => {
	await window.YtChannelApi.AddChannel(channelId)
}

export const GetChannel = async () => {
	return window.YtChannelApi.GetChannel()
}

export const GetChannelVideo = async (channelId) => {
	return window.YtChannelApi.GetChannelVideo(channelId)
}