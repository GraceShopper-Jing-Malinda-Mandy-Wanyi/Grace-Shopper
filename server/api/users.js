const router = require('express').Router()
const { models: { User, Order, CartItem, Product }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      order: [["id", "ASC"]],
      attributes: ['id', 'username', 'firstName', 'lastName', 'userType']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
});

router.get('/:userId', async (req, res, next) => {
  try{
    const user = await User.findByPk(req.params.userId);
    res.json(user)
  } catch(err){
    next(err)
  }
});

// GET /:userId/orders/:orderId
// get products that were bought by that user w/ that order id
router.get("/:userId/orders/:orderId", async (req, res, next) => {
  try {
    const singleOrder = await CartItem.findAll({
      where:{
        orderId: req.params.orderId,
        userId: req.params.userId,
      },
      include: [Product]
    });
    res.json(singleOrder);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:userId/orders/
// get all orders with that user Id
router.get("/:userId/orders", async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where:{
        userId: req.params.userId
      },
      include: [CartItem]
    });
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try{
      res.json(await User.create(req.body));
  } catch (err){
      next(err)
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {
      const user = await User.findByPk(req.params.studentId);
      await user.destroy();
      res.json(user);
  } catch (err) {
      next(err)
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:userId/unregister', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    user.id = null;
    await user.save();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

