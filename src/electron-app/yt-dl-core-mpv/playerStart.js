const { VideoPlayer } = require('./videoPLayer')


//Logic
const starting = (url) => {

	console.log('in playerStart.js', url)

	const player = new VideoPlayer('win')
	player.getStreamYt(url, {type: 'static'})
}


module.exports = { starting }