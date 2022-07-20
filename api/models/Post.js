const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true, //title must be unique
    },
    description:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:false,
    },
    username:{
        type:String,
        require:true,
    },
    category:{
        type:Array,
        require:false,
    }},
    {timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema)