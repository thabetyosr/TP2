const express = require('express');
const app = express();
app.use(express.json());

// Middleware validate Age
const validateAge = (req, res, next) => {
    const { age } = req.body;

    if (age !== undefined && age < 0) {
        const error = new Error("L'âge ne peut pas être négatif.");
        error.status = 400;
        return next(error); 
    }

    next(); 
};


const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send({ message: err.message });
};


app.post('/age', validateAge, (req, res) => {
    res.send('Données valides, requête acceptée.');
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
