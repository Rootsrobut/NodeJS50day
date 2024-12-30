const express=require('express');
const app=express();
const path = require( 'path');
const port=process.env.PORT || 3000;
//app.use(express.static('public'));
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.set('content-Type','text/plain');
    res.status(201).send('get request received');
})
app.post('/',(req,res)=>{
    res.send('post request received');
})
app.put('/',(req,res)=>{
    res.send('put request received');
})
app.delete('/',(req,res)=>{
    res.send('delete request received');
})
app.listen(port,()=>{
    console.log('Server start at this port',port);
});