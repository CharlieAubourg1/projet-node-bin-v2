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
                key: '_id',
            },
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: '_id',
            },
        },
        borrow_date : {
            type: DataTypes.DATEONLY
        },
        return_date : {
            type: DataTypes.DATEONLY
        },
        borrow_status  : {
            type: DataTypes.ENUM('ongoing', 'returned'),
            defaultValue: 'ongoing',
        },
    }, 
    {
        sequelize: connection,
    }
);
module.exports = borrow;
