const express = require('express');
const router = express.Router();
const validateProductData = require('../middlewares/validateProductData');

//  POST /add
router.post('/add', validateProductData, (req, res) => {
    const { name, price } = req.body;
    const product = { name, price };

    res.status(201).json({
        message: 'Produit ajouté avec succès.',
        product,
    });
});

module.exports = router;
