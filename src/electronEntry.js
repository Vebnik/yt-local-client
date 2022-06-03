const { StartElectron } = require('./electron-app/appConfig')
const argv = require('minimist')


// logic
const typeApp = argv(process.argv)._[2]
const start = new StartElectron(typeApp)