const { DataTypes } = require("sequelize");
const sequelize = require("//config/sequelize"); // your initialized sequelize instance

const Location = sequelize.define(
  "Location",
  {
    locationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationPriceLimit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "Locations", // optional, if you want the table name to be explicitly defined
    timestamps: false, // optional, to disable createdAt and updatedAt fields
  }
);

module.exports = Location;
