const User = require("../models/userModel");
const asyncHandler = require("express-async-handler")

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.find({ email: email });

    if (findUser.length === 0) {
        // criar novo usuario
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
       throw new Error('conta existente');
        };
    
});

module.exports = { createUser };


/*
const User = require("../models/userModel");

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.find({ email : email});
    if (!findUser) {
        const newUser = User.create(req.body);
        res.json(newUser);
    }else{
        res.json({
            msg: "essa conta ja existe",
            sucess: false,
        });
    }
};

module.exports = { createUser };*/ 
