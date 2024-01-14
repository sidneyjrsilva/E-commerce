const User = require("../models/userModel");

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.find({ email: email });

    if (findUser.length === 0) {
        // criar novo usuario
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        res.json({
            msg: "Usuário já existe",
            success: false,
        });
    }
};

module.exports = { createUser };
