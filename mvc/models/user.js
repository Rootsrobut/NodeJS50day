const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    first_name: {type: String,required: true},
    last_name:{type:String,required:false},
    email:{type:String,required:true,unique:true},
    gender:{type:String},
    job_title:{type:String},
    },{timestamps:true});
    // model
 const User = mongoose.model('User', userSchema);
  mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
         .then(() => console.log('Connected to MongoDB'))
         .catch(err => console.log(err));
 module.exports = User;