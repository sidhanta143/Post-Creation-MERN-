
const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    img:String,
    caption:String,
    name:String,
    URL:String,
})

const postmodel=mongoose.model("post",postSchema);


module.exports=postSchema;
module.exports=postmodel;