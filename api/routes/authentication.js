const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const { validate } = require("../models/User");

//signup
router.post("/signup", async(req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const secretPassword = await bcrypt.hash(req.body.password,salt); //bcrypt extension to make pw hashed in db
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: secretPassword, //uses hashed pw
        });
        const user = await (newUser.save()); //saves new user info into db
        res.status(200).json(user); // response = successful
    }
    catch(err){
        res.status(500).json(err)
    }
}) //requests for things in schema then responses with error/newuser created


//signin
router.post("/signin", async(req,res) =>{
    try{
        const user = await User.findOne({
            username:req.body.username}); //since username is unique, there's only 1
            !user && res.status(400).json("Incorrect username.");

            const valid = await bcrypt.compare(req.body.password, user.password); //compares input to db pw
            !valid && res.status(400).json("Incorrect password.");

            const{password, ...others} = user._doc;
            res.status(200).json(others); // response = successful
        }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;