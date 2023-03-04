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
      await CartItem.create(req.body);
    } else {
      console.log("RQ BODY", req.body);
      req.body.guestCart.forEach(async (cartItem) => {
        await CartItem.create({
          userId: req.body.userId,
          qty: cartItem.qty,
          productId: cartItem.id,
        });
      });
    }
  } catch (err) {
    next(err);
  }
});

// PUT /api/cart/:id
router.put("/:id", async (req, res, next) => {
  try {
    let cartItem = await CartItem.findOne({
      where: {id: req.params.id},
      include: {model: Product}
    })
    cartItem = await cartItem.update(req.body)
    console.log(cartItem)
    res.send(cartItem)
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:id
router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id)
    await CartItem.destroy({ where: { id: req.params.id } });
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});
