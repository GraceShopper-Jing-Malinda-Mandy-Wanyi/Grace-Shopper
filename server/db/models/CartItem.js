const Sequelize = require("sequelize");
const db = require("../db");

const CartItem = db.define("cartItem", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = CartItem