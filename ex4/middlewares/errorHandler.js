
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Erreur interne du serveur.',
    });
};

module.exports = errorHandler;
