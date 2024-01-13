const User=require("../models/userModel");


const createUsser = async (req,res) => {
    const email = req.body.email;
    const findUser = await User.findOne(email);
    if (!findUser) {
        //criar novo usuario
        const newUser = User.create(req.body);
        res.jsson(newUser);
    }
else
    {
        res.json({
            msg: "Usuário ja existe",
            sucess: false,
        });
    }
};

module.exports = { createUser };