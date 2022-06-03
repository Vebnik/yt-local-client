const ytsr = require('ytsr')


const getSearchResults = async (title) => {

	console.log('in ytSearchLogic.js start exec', title)

	const searchModel = {}

	const prom = new Promise(async resolve => {
		await ytsr(title, {pages: 1}).then(async res => {

			searchModel.results = res.results
			searchModel.items = res.items.map(el => {
				if (el.type === 'video') return {
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
			}).filter(el => el)
			await resolve('Parsing done')
		})
	})

	await Promise.all([prom])
	return searchModel
}


module.exports = { getSearchResults }