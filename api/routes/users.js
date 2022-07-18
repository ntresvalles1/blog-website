const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//update info
router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        } //if change pw, require it
        try{
            const updatedInfo = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body, //updates info by finding matching id then input becomes new info
            },{new:true}); //shows change directly on mongoose/postman
            res.status(200).json(updatedInfo); // response = successful
        } 
        catch(err){
            res.status(500).json(err);
        }
    } 
    else{
        res.status(401).json("Please sign-in to your account to edit.");
    } //checks if user is signed in to their account 
   
}); //requests for things in schema then responses with error/newuser created

//delete 
router.delete("/:id", async(req,res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({ username: user.username }); //deletes all post from user account
                await User.findByIdAndDelete(req.params.id); //find user by id, then delete it
                res.status(200).json("Account successfully deleted."); // response = successful
            } 
            catch(err){
                res.status(500).json(err);
            }
        }catch(err){
            res.status(404).json("User does not exist.");
        }
    } 
    else{
        res.status(401).json("Please sign-in to your account to delete.");
    } //checks if user is signed in to their account 
   
}); //requests for things in schema then responses with error/newuser created

//get a single user
router.get("/:id", async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password,... others} = user._doc ;   // makes sure the password isn't sent
        res.status(200).json(others); // response = successful & returns information
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;