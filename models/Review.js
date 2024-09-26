import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Review = sequelize.define('Review', {
    ReviewID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ReviewerID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    RevieweeID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5
        }
    },
    Comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reviews',
    timestamps: false
});

export default Review;
