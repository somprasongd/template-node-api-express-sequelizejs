const express = require('express')
const fs = require('fs')
const path = require('path')

// set routes ให้ไปอ่านจากโฟลเดอร์ app
exports.setupRoutes = app => {
  // load routes
  fs
    .readdirSync(__dirname)
    .filter((file) => {
      // fs.statSync(path.join(__dirname, file)).isDirectory()
      return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach((feature) => {
      const router = express.Router()
      const routes = require(path.join(__dirname, `${feature}/index.js`))
      routes.setup(router)
      app.use(`/${feature}`, router)
    })
}
