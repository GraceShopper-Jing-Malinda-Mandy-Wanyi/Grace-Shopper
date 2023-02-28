const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  firstName: { 
    type: Sequelize.STRING, 
    allowNull: false },
  lastName: { 
    type: Sequelize.STRING, 
    allowNull: false },
  address: { 
    type: Sequelize.TEXT, 
    allowNull: false },
});

module.exports = Order;
