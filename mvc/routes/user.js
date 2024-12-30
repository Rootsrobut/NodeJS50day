const express = require('express');
const app = express();
const User=require('../models/user.js');
app.get('/users',async (req,res)=>{
    const alldbUsers=await User.find({});
    const html = `<ul>
    ${alldbUsers.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>`;
     res.send(html);
 });

 app.post('/api/users', async (req, res) => {
     try {
         const rawData = req.body;
         const data = cleanObjectKeys(rawData);
         const { first_name, last_name, email, gender, job_title } = data;
         if (!first_name || !email || !gender || !job_title) {
             return res.status(400).json({ message: 'Please fill in all required fields.' });
         }
 
         // Create the user document in MongoDB
         const user = await User.create({ first_name, last_name, email, gender, job_title });
         res.status(201).json(user);
     } catch (error) {
         // Handle errors (e.g., duplicate email or other validation errors)
         console.error('Error creating user:', error.message);
         res.status(500).json({ error: error.message });
     }
 });
 app.get('/api/users/:id',async (req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user){
     return res.status(404).json({message:'User not found'});
     }
     res.json(user);
 });
 app.patch('/api/users/:id',async (req,res)=>{
     await User.findByIdAndUpdate(req.params.id,{last_name:"changed"});
      return res.status(404).json({message:'Sucess karo do'});
    
  });
  app.delete('/api/users/:id',async (req,res)=>{
     await User.findByIdAndDelete(req.params.id);
      return res.status(404).json({message:'Sucess karo delete'});
    
  });
module.exports=app;