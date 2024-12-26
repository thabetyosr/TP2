
const validateProductData = (req, res, next) => {
    const { name, price } = req.body;

    // Vérifie si le champ "name" est valide
    if (!name || typeof name !== 'string' || name.trim() === '') {
        const error = new Error("Le champ 'name' est requis et doit être une chaîne de caractères non vide.");
        error.status = 400;
        return next(error);
    }

    // Vérifie si le champ "price" est valide
    if (price === undefined || typeof price !== 'number' || price <= 0) {
        const error = new Error("Le champ 'price' est requis et doit être un nombre positif.");
        error.status = 400;
        return next(error);
    }

    next(); 
};

module.exports = validateProductData;
