import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize'; // Adjust the path based on your project structure

const DisplacementRequest = sequelize.define('DisplacementRequest', {
    RequestID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    FamilyMembers: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    LocationPreference: {
        type: DataTypes.STRING,
        allowNull: true
    },
    UrgencyLevel: {
        type: DataTypes.ENUM('High', 'Medium', 'Low'),
        allowNull: true
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
    tableName: 'displacementrequests',
    timestamps: false
});

export default DisplacementRequest;
