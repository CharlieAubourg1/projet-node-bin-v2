const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class borrow extends Model {}

borrow.init({
        borrow_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        book_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'Livres',
                key: 'id',
            },
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        borrow_date : {
            type: DataTypes.DATEONLY
        },
        return_date : {
            type: DataTypes.DATEONLY
        },
    }, 
    {
        sequelize: connection,
        timestamps: false,
    }
);
module.exports = borrow;
