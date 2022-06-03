const ytpl = require('ytpl')


const getChannelVid = async (channelId) => {

	const prom = new Promise(async resolve => {
		await ytpl(channelId).then(async info => {

			const channelModel = {
				channelId: info?.id,
				videoCount: info?.estimatedItemCount,
				avatarUrl: info?.author?.bestAvatar?.url,
				name: info?.author?.name,
				channelUrl: info?.author?.url,
				lastUpdated: info?.lastUpdated
			}
			await resolve(channelModel)
		})
	})

	await Promise.all([prom])
	return prom
}


const getAllChannelVid = async (channelId) => {
	console.log('in getAllChannelVid', channelId)

	const prom = new Promise(async resolve => {
		await ytpl(channelId, {pages: 10}).then(async info => {

			const videoModel = info.items.map(el => {
				return {
					title: el?.title,
					url: el?.url,
					views: el?.views,
					duration: el?.duration,
					uploadedAt: el?.uploadedAt,
					author: el?.author?.name,
					channel: el?.author?.url,
					channelId: el?.author?.channelID,
					thumbnail: el?.thumbnails[0]?.url
				}
			})
			await resolve(videoModel)
		})
	})

	await Promise.all([prom])
	return prom
}

module.exports = { getChannelVid, getAllChannelVid }