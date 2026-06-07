
const express=require("express");
const cors=require("cors");
const postmodel=require("./Src/models/post.mmodel.js");
const multer=require("multer");
const uploadfile=require("./Src/services/storage.service.js");
const app=express();

app.use(cors());
app.use(express.json());

const upload=multer({Storage:multer.memoryStorage()});


app.post("/create-post",upload.single("image") , async(req,res)=>{



    // console.log(req.body);
    // console.log(req.file);
    
    const result=await uploadfile(req.file.buffer);
     console.log(result);
   
const post = await postmodel.create({
    // image: result.url,
    caption: req.body.caption,
    name:req.body.name,
    URL:result.url,
});

    console.log(post);
    return res.status(201).json({
        message:"Post created successfully",
        post,
    })

})

app.get("/posts",async(req,res)=>{
        const posts=await postmodel.find()


        return res.status(200).json({
            message:"Posts fetched successfully",
            posts,
        })
    })




module.exports=app;