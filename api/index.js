const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authenticationRoute = require("./routes/authentication");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const multer = require("multer");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("connected to mongo"))
  .catch(err=>console.log(err));

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"images");
  },
  filename:(req,file,cb) => {
    cb(null,req.body.name);
  },
});  //takes our file and its going to be inside images 

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
  res.status(200).json("File successfully uploaded")

});//sends our image data from postman

app.use("/api/authentication", authenticationRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);


app.listen("4000", () =>{
    console.log("Backend is running.")
});