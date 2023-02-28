const router = require("express").Router();
const { Product } = require("../db");

// GET /api/products/:productId
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
