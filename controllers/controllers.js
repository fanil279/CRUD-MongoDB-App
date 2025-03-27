const User = require('../model/user');

const createNew = async (req, res, next) => {
    try {
        const {name, email} = req.body;

        if (!name || !email) {
            return res.status(400).json( {message: "Name and email are required"} );
        }

        const user = new User( {name, email} );
        await user.save();

        res.status(201).json( {message: "A new user created!"} )
    } catch (err) {
        next(err);
    }
};

const getAll = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) return next(res.status(404).json( {message: "User with the specified id was not found"} ));

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if(!user) return next(res.status(404).json( {message: "User with the specified id was not found"} ));

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) return next(res.status(404).json( {message: "User with the specified id was not found"} ));

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        next(err);
    }
};

module.exports = { createNew, getAll, getById, update, deleteById };