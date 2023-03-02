const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "Product Description Here...",
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productType: {
    type: Sequelize.DataTypes.ENUM("Wine", "Beer", "Spirit"),
    allowNull: false
  },
  img: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://images-platform.99static.com/MqvDLzOLdIdDq4QkdeV3LiFVmdo=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/95/95687/attachment_95687436",
  },
});

module.exports = Product;
