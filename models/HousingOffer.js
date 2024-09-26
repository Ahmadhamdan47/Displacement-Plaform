import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const HousingOffer = sequelize.define('HousingOffer', {
    OfferID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    AvailableRooms: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
        allowNull: false
    },
    IsAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    AdditionalDetails: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'housingoffers',
    timestamps: false
});

export default HousingOffer;
