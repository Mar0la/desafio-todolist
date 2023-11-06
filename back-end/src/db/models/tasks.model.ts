const { Sequelize, DataTypes, Model } = require('sequelize');
import sequelize from '../connection'

const Tasks = sequelize.define('Tasks', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

Tasks.sync().then(() => console.log('Criado a tabela tasks')).catch((error) => console.log(error))

export default Tasks