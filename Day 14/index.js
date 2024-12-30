// Best Practices // write code

// Modularize your code:
// Use descriptive naming conventions
// Keep module responsibilities clear
// Use version control like Git

const express=require('express');
const app=express();

//Handle default request

app.get('/',(req,res)=>{
    res.send('Welcome to my home page');
});
//Handle request to /about page
app.get('/about',(req,res)=>{
    res.send('Welcome to my about page');
});
app.listen(3100,()=>{
    console.log(`server start at port`)
});
