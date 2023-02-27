const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    LinkedUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',key: 'id'}
    },
    LinkedPost:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{model:"post",key:"id"}
    },
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);

module.exports = Comment;
