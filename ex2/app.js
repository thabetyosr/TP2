const express = require('express');
const app = express();

// Middleware des requêtes JSON
app.use(express.json());

// Middleware de validation
const validatePostData = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Erreur : Les champs "username" et "password" sont requis.');
    }

    next(); 
};

// Route de validation
app.post('/register', validatePostData, (req, res) => {
    res.send('Les données sont valides, utilisateur enregistré avec succès.');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
