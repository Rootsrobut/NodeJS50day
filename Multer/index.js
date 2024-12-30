const path=require('path');
const express=require('express');
const multer=require("multer");
const app=express();
const PORT=8000;
const storage=multer.diskStorage({
    destination:function(req,file,cb){
         cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.destination);
    }
});
const upload=multer({storage:storage});
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    return res.render("homepage");
});
app.post('/upload',upload.single("profileimage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});
