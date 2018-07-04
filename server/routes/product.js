const express = require('express');
const Product = require('../models/product');
const passport = require('passport');
const router = express.Router();

const { createProduct, requireJwt, isAdmin } = require('../middleware/auth')

router.get('/', (req, res) => {
    Product.find().then(product => {
        let result = []
        for(let i=0; i<product.length; i++) {
            result.push(product[i].title)
            result.push(product[i].description)
            result.push(product[i].price)
        }
        res.send(result)
    })
    
})

router.post('/product', createProduct, (req, res) => {
    res.send('New product added: ' + req.product.title)
})



module.exports = router;