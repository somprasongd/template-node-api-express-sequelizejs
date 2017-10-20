const env = require('./env')
const db = require('./db')
// use node 8.6 up
module.exports = {
  ...env,
  db
}
