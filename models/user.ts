import { DataType, DataTypes } from 'sequelize'
import db from '../db/connect'

// esto es la creacion de los valores de la base de datos 
const User = db.define('Users',{
  name: {
    type: DataTypes.STRING
  },
  state: {
    // tinyint y boolean es lo mismo
    type: DataTypes.BOOLEAN
  }
})

export default User
