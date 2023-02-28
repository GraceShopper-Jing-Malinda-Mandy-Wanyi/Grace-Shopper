//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Cart = require("./models/Cart")

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.hasMany(Product);
Order.hasMany(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Cart
  },
};
