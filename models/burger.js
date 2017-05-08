// Creates the table
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
  },
  {
    timestamps: true
  }
);
  return Burger;
};
