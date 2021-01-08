
const server = require('./src/infra/config/app.config')
const db = require('./src/infra/config/db.config')


server.start();
db.connect();
