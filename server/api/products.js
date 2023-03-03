const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const { Op } = require("sequelize");

// POST /api/products/
router.post("/", async (req, res, next) => {
  try {
    const addProduct = await Product.create(req.body);
    res.json(addProduct);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:productId
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/
router.get("/", async (req, res, next) => {
  try {
    const query = {};

    if (req.query.type === "wine") {
      query.where = { productType: "Wine" };
    }
    if (req.query.type === "beer") {
      query.where = { productType: "Beer" };
    }
    if (req.query.type === "spirit") {
      query.where = { productType: "Spirit" };
    }
    const allProducts = await Product.findAll(query);
    console.log(allProducts)
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:productId
router.put("/:id", async (req, res, next) => {
  try {
    const editProduct = await Product.findByPk(req.params.id);
    await editProduct.update(req.body);
    res.json(editProduct);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:productId
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteProduct = await Product.findByPk(req.params.id);
    await deleteProduct.destroy();
    res.json(deleteProduct);
  } catch (err) {
    next(err);
  }
});

router.get("/search/search", async (req, res, next) => {
  try {
    const query = req.query.query;
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});
