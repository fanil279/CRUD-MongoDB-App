const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === "ValidationError") {
        return res.status(400).json({ message: Object.values(err.errors).map(e => e.message) });
    }
    
    res.status(err.status || 500).json( {message: err.message || "Internal server error"} );
};

module.exports = errorHandler;