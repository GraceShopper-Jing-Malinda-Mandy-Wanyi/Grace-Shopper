const router = require("express").Router();
const {
  models: { CartItem, Product },
} = require("../db");
module.exports = router;
const { Op } = require("sequelize");

// GET /api/cart/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const cart = await CartItem.findAll({
      where: {
        userId: req.params.userId,
      },
      include: { model: Product },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// POST /api/cart/
router.post("/", async (req, res, next) => {
  try {
    if (!req.body.guestCart) {
      let cartItem = await CartItem.findOne({
        where: { userId: req.body.userId, productId: req.body.productId },
      });
      if (cartItem) {
        await cartItem.update({
          qty: Number(cartItem.qty) + Number(req.body.qty),
        });
        console.log("HITITI", cartItem)
      } else {
        await CartItem.create(req.body);
      }
      cartItem = await CartItem.findOne({
        where: { userId: req.body.userId, productId: req.body.productId },
        include: { model: Product },
      });
      res.send(cartItem);
    } else {
      console.log("RQ BODY", req.body);
      const myCart = await CartItem.findAll({
        where: { userId: req.body.userId },
      });
      const guestCart = req.body.guestCart;

      guestCart.forEach(async (guestCartItem) => {
        // try to match product id in user cart to product id in guest cart
        const match = myCart.find(
          (myCartItem) => myCartItem.productId === guestCartItem.id
        );
        // if match exists, update the quantities
        // else, create a new cartItem in user cart
        if (match) {
          await match.update({
            qty: Number(guestCartItem.qty) + Number(match.qty),
          });
        } else {
          await CartItem.create({
            qty: guestCartItem.qty,
            userId: req.body.userId,
            productId: guestCartItem.id,
          });
        }
      });
      res.send(null)
    }
  } catch (err) {
    next(err);
  }
});

// PUT /api/cart/:id
router.put("/:id", async (req, res, next) => {
  try {
    let cartItem = await CartItem.findOne({
      where: { id: req.params.id },
      include: { model: Product },
    });
    cartItem = await cartItem.update(req.body);
    console.log(cartItem);
    res.send(cartItem);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:id
router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await CartItem.destroy({ where: { id: req.params.id } });
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});
