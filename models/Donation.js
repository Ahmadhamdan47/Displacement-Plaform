import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Donation = sequelize.define('Donation', {
    DonationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DonorID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DisplacedUserID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DonationType: {
        type: DataTypes.ENUM('Money', 'Accommodation'),
        allowNull: true
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    AccommodationOfferID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'donations',
    timestamps: false
});

export default Donation;
