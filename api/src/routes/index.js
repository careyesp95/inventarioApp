const { Router } = require('express');
const processRouter = require('./Process');
const productsRouter = require('./Products');



const router = Router();


router.use('/products', productsRouter)
router.use('/process', processRouter)

module.exports = router;
