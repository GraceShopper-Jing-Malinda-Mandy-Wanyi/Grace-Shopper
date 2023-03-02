"use strict";

const {
  db,
  models: { User, Product, Order, CartItem },
} = require("../server/db");
const userData = require("./user-data");
const productData = require("./product-data");
const orderData = require("./order-data");
const cartItemData = require("./cartItem-data");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  for (const user of userData) {
    await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
      userType: user.userType,
    });
  }

  for (const product of productData) {
    await Product.create({
      name: product.name,
      size: product.size,
      type: product.type,
      price: product.price,
      description: product.description,
    });
  }

  for (const order of orderData) {
    await Order.create({
      firstName: order.firstName,
      lastName: order.lastName,
      address: order.address,
      userId: order.userId,
    });
  }

  for (const cartItem of cartItemData) {
    await CartItem.create({
      qty: cartItem.qty,
      productId: cartItem.productId,
      orderId: cartItem.orderId,
      userId: cartItem.userId,
    });
  }

  // Creating Users
  // const users = await Promise.all([
  //   User.create({ username: 'cody', password: '123', firstName: 'cody', lastName: 'body', email: 'cody@email.com', userType: 'ADMIN' }),
  //   User.create({ username: 'murphy', password: '123', firstName: 'murphy', lastName: 'burphy', email: 'murphy@email.com', userType: 'ADMIN' }),
  // ])

  console.log(`seeded ${userData.length} users`);
  console.log(`seeded ${productData.length} products`);
  console.log(`seeded ${orderData.length} orders`);
  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1]
  //   }
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
