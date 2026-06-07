const app = require("./App.js");
const connectDB=require("./Src/Db/db.js");
app.get("/",(req,res)=>{
    res.send("sidhanta");
})

const PORT=3000;

connectDB();
app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
    
})

