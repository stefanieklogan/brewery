const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // allow the user to enter email or not --- check to make sure code is working properly
    email: {
        type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //     isEmail: true,
      // },
    },
},
{
    // hooks: {
    // beforeCreate: async (newUserData) => {
    //     return newUserData;
    // },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
}
);

module.exports = User;
