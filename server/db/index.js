//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const CartItem = require("./models/CartItem")

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(CartItem);
CartItem.belongsTo(User);

CartItem.belongsTo(Product);
Product.hasMany(CartItem);

Order.hasMany(CartItem);
CartItem.belongsTo(Order)

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    CartItem
  },
};
