const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
const {adminVerification} = require("./verification")
module.exports = router;

// GET /api/orders/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:orderId
router.get("/:userId/orders/:orderId", async (req, res, next) => {
  try {
    const orders = await Order.findByPk(req.params.orderId);
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/admin/allorders
router.get("/admin/allorders", adminVerification, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.send(allOrders);

    console.log(allOrders)
  } catch (err) {
    next(err);
  }
});
