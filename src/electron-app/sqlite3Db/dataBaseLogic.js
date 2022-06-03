const sqlite3 = require('sqlite3').verbose()
const { app } = require('electron')
const path = require('path')
const fs = require('fs')


// Logic
const checkDir = async (docPath) => {
	const prom = new Promise(resolve => {
		fs.mkdir(path.join(docPath, 'ytAnalog'), (err) => {
			if (err) return resolve(true)
			return resolve(false)
		})
	})

	await Promise.all([prom])
	return prom
}

class GetDb {

	#db
	#defaultPath = path.join(app.getPath('documents'), 'ytAnalog', 'channelData')

	constructor() {
		checkDir(app.getPath('documents')).then(async res => {
			this.#db = new sqlite3.Database(this.#defaultPath)
			this.createTable('channels').catch(err => console.log(err))
		})
	}

	async createTable(tableName) {

		this.#db.serialize(() => {
			try { this.#db.run(`CREATE TABLE ${tableName} (channelModel JSON)`) } catch (e) {  }
		})
	}

	saveData(tableName, data) {

		const stmt = this.#db.prepare(`INSERT INTO ${tableName} VALUES (?)`)
		stmt.run(JSON.stringify(data, null, '  '))
		stmt.finalize()
	}

	async getData(tableName) {

		const prom = new Promise(resolve => {
			this.#db.all(`SELECT * FROM ${tableName}`, (err, rows) => { resolve(rows) })
		})

		await Promise.all([prom])
		return prom
	}
}


module.exports = { GetDb }