const router = require("express").Router();
const { models: {Product} } = require("../db");
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
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

router.get("/type/:productType", async(req,res,next) => {
  try {
    const productTypes = await Product.findAll({
      where: {
        productType: req.params.productType
      },
      attributes: ["id", "name", "productType", "price", "size", "description"]
    })
    res.json(productTypes);
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
          [Op.iLike]: `%${query}%`
        }
      }
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/random/random', async (req, res) => {
  try {
    const products = await Product.findAll();
    const randomProducts = [];
    for (let i = 0; i < 10; i++) {
      const randomIdx = Math.floor(Math.random() * products.length);
      randomProducts.push(products[randomIdx]);
      products.splice(randomIdx, 1);
    }
    res.json(randomProducts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
