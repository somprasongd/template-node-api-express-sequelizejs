const {User: UserModel} = require('../../models')

exports.get = async (req, res, next) => {
  try {
    const {id} = req.params
    console.log('id ' + id)
    const user = await UserModel.findById(+id, {
      attributes: ['id', 'username']
    })
    if (!user) {
      res.status(404)
      res.json({status: 404, message: 'user not found'})
      return
    }
    const tasks = await user.getTasks({where: {id: 1}})
    res.json({result: {
      user,
      tasks
    }})
  } catch (err) {
    err.status = 500
    next(err)
    // res.status(500).json({status: 500, message: err.message || err})
  }
}
