const path = require("path")
const ytdl = require("ytdl-core")
const Mpv = require('node-mpv')


// Logic
class VideoPlayer {

	#platform

	constructor(platform = 'win') {
		this.#platform = platform
	}

	#parsingYtFormats = async (info, opt) => {

		console.log('in ytSearchLogic.js -> parsingYtFormats', opt)

		if (opt.type === 'stream') return info.player_response.streamingData.adaptiveFormats
			.filter(el => /hd/g.test(el.quality))[0].url

		return info.player_response.streamingData.formats.filter(el => /hd/g.test(el.quality))[0]?.url ?
			info.player_response.streamingData.formats.filter(el => /hd/g.test(el.quality))[0]?.url
			: info.player_response.streamingData.formats[0].url
	}

	createPlayer = (url) => {
		const mpvConf = {
			dirPath: path.join(__dirname, '..', '..', 'mpvSrc', 'mpv.exe'),
			tome: path.join(__dirname, 'mpvSrc').slice(0, 1)
		}

		const config = {
			"audio_only": false,
			"binary": mpvConf.dirPath,
			"debug": false,
			"ipcCommand": null,
			"socket": "\\\\.\\pipe\\mpvserver",
			"time_update": 1,
			"verbose": false,
		}
		const mpvPlayer = new Mpv(config)

		console.log('starting mpv')
		mpvPlayer.load(url)
	}

	getStreamYt = (url, opt) => {
		ytdl.getInfo(url).then(info => {

			console.log('in ytSearchLogic.js -> getStreamYt', Boolean(info))

			this.#parsingYtFormats(info, opt).then(streamUrl => {
				console.log('getting mpv', streamUrl)
				this.createPlayer(streamUrl)
			})
		})
	}
}


module.exports = { VideoPlayer }