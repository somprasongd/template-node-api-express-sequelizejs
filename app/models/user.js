module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    tableName: 'user'
  })

  User.associate = (models) => {
    User.hasMany(models.Task, { as: 'tasks', foreignKey: 'user_id' })
  }

  return User
}
