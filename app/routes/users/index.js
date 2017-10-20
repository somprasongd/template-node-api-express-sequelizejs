const UserService = require('../../services/users')

exports.setup = (router) => {
  router
    .get('/:id', UserService.get)
}
