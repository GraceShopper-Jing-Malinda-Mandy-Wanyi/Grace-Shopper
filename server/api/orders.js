const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
module.exports = router;

// GET /api/orders/:orderId
router.get("/:userId/orders/:orderId", async (req, res, next) => {
  try {
    const orders = await Order.findByPk(req.params.orderId);
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/
router.get("/:userId/orders", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where:{
        userId: req.params.userId
      }
    });
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});
