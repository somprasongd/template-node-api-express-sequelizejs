const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const config = require('../../config')

const sequelize = config.db.databaseUrl
  ? new Sequelize(config.db.databaseUrl, config.db.options)
  : new Sequelize(config.db.database, config.db.username, config.db.password, config.db.options)

const db = {}

// load models
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// set associations
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
