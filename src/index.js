const http = require('http')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./app/routes')
const config = require('./config')

const app = express()

app.use(logger('dev'))
// set enviroments
app.use(bodyParser.json())
// ถ้าต้องการให้ body-parser แปลง body message เป็น json ให้ตั้งค่า extended: true
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('This is Sequelizejs template')
})

// // use auth for all routes
// app.use(require('./middlewares/auth'))

// setup routes
routes.setupRoutes(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error(`${req.method} ${req.url} Not Found`)
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send({
    status: err.status || 500,
    error: err.message
  })
})

// db connect
const models = require('./app/models')

const startServer = app => {
  const server = http.createServer(app)
  server.listen(config.port, err => {
    if (err) {
      throw err
    }
    const addr = server.address()
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
    console.log(`Listening on ${bind}`)
  })
}

// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
  startServer(app)
})

// // รอให้ต่อฐานสำเร็จ ค่อย start server (เมื่อไม่ต้องการให้สร้างตารางให้อัตโนมัติ)
// models.sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.')
//     startServer(app)
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err)
//     throw err
//   })
