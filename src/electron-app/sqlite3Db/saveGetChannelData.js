// Import
const { GetDb } = require('./dataBaseLogic')
const getDb = new GetDb()


// Logic
const saveChannel = async (chanelModel) => {
	await getDb.saveData('channels', chanelModel)
}

const getChannel = async () => {

	const prom = new Promise(resolve => {
		getDb.getData('channels').then(data => {
			const parsData = data.map(el => JSON.parse(el.channelModel))
			resolve(parsData)
		})
	})

	await Promise.all([prom])
	return prom
}


module.exports = { saveChannel, getChannel }