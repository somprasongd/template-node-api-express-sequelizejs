const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization')

  if (!authHeader) {
    // res.status(401).json({error: 'unauthorized no header'})
    // return
    let err = new Error('unauthorized no header')
    err.status = 401
    next(err)
    return
  }
  const accessToken = authHeader.match(/Bearer (.*)/)[1]

  jwt.verify(accessToken, config.secretKey, (err, decoded) => {
    if (err) {
      // res.status(401).json({error: 'unauthorized unvalid token'})
      // return
      let err = new Error('unauthorized unvalid token')
      err.status = 401
      next(err)
      return
    }

    req.auth = decoded
    next()
  })
}
