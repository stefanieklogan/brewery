const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Admin extends Model {
checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}
}

Admin.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [8,25],
        },
    },
    },
    {
    hooks: {
        beforeCreate: async (newAdminData) => {
        newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
        return newAdminData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin',
    });

module.exports = Admin;
