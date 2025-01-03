const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const urlschema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[{
        timestamp:{
            type:Number,
        }
    }],
},{timestamps:true});
const URL=mongoose.model('url',urlschema);
mongoose.connect('mongodb://127.0.0.1:27017/first-project').then((data)=>{
    console.log("connected");
})
module.exports=URL;