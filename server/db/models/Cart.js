const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.DECIMAL(20, 2),
    allowNull: false,
  },
});

module.exports = Cart