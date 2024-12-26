const express = require('express');
const app = express();
const validateProductData = require('./middlewares/validateProductData');
const productRoutes = require('./routes/products');
const errorHandler = require('./middlewares/errorHandler');
app.use(express.json());

// Utilisation des routes
app.use('/products', productRoutes);


app.use(errorHandler);


app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
