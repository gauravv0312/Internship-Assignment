const User = require('../models/User');


exports.postUserDetailes = async (req,res) => {
const {fullname,email,phone} = req.body;
const user = await User.create({
    fullname,
    email,
    phone
});
res.status(200).json({
    success:true,
    user
})
}

exports.getUserDetails = async (req,res) => {
    const user = await User.find();

    res.status(200).json({
       
        user,
    });
}