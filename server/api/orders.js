const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
module.exports = router;

// GET /api/orders/:orderId
router.get("/:id", async (req, res, next) => {
  try {
    const orders = await Order.findByPk(req.params.id);
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/
router.get("/", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});
