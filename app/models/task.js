module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {
    tableName: 'task'
  })

  Task.associate = (models) => {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Task.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'user_id',
        allowNull: false
      }
    })
  }

  return Task
}
