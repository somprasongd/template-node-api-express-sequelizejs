const fs = require('fs')
const path = require('path')
// const UserServices = require('./users')

const services = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    // fs.statSync(path.join(__dirname, file)).isDirectory()
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach((feature) => {
    const service = require(path.join(__dirname, `${feature}/index.js`))
    services[feature] = service
  })

module.exports = services
