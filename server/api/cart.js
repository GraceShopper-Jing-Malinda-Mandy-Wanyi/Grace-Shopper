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
      include: {model: Product}
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// POST /api/cart/
router.post("/", async (req, res, next) => {
  try {
    await CartItem.create(req.body);
  } catch (err) {
    next(err);
  }
});
