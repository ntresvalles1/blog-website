const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create new post
router.post("/", async(req,res) => {
    const newPost = new Post(req.body); //http request
    try{
        const savedPost = await newPost.save(); //saves new post into savedPost
        res.status(200).json(savedPost); // response = successful & returns savedPost
    }
    catch(err){
        res.status(500).json(err);
    }
}); //requests for things in schema then responses with error/newuser created


//update post 
router.put("/:id", async(req,res) => { 
    // gets it from post_id & async makes a function return a Promise
    try{
        const post = await Post.findById(req.params.id); 
        // await--> makes a function wait for a Promise 
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                    {new:true}
                );
                res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("Please sign-in to your account to update posts.");
        }
    } catch(err) {
        res.status(500).json(err);
    }
   
}); //requests for things in schema then responses with error/newuser created 


//delete post
router.delete("/:id", async(req,res) => { 
    // gets it from post_id & async makes a function return a Promise
    try{
        const post = await Post.findById(req.params.id); 
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post successfully deleted!");
            }
            catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("Please sign-in to your account to delete posts.");
        }
    } catch(err) {
        res.status(500).json(err);
    }
}); //requests for things in schema then responses with error/newuser created 


//get post
router.get("/:id", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post); // response = successful & returns post
    }
    catch(err){
        res.status(500).json(err);
    }
}); //requests for post through id 

//get all posts
router.get("/", async(req,res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;
    try{
        let posts; 
        if(username){
            posts = await Post.find({username})
        }
        else if(categoryName){
            posts = await Post.find({category:{
                    $in:[categoryName],
                },
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts); // response = successful & returns post
    }
    catch(err){
        res.status(500).json(err);
    }
}); //requests for post through user or category, etc

module.exports = router;