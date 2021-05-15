const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feedback extends Model { }

Feedback.init(
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
        feedback: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 500]
            }
        },
        checkbox: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'feedback',
    }
);

module.exports = Feedback;