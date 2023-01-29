const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/productDetail', (req, res) => {
    res.render('productDetail')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/productCart', (req, res) => {
    res.render('cart')
});

router.get('/terms-conditions', (req, res) => {
    res.render('terms-conditions')
});

module.exports = router