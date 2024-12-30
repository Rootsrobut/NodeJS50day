//let a

// const http=require("http");
// const express = require("express");
// const url=require("url");
// const  fs=require("fs");
// const app=express(); //handeler function


// app.get('/',(req,res)=>{
//      return res.send('Hello From Home Page');
// });
// app.get('/about',(req,res)=>{
//     return res.send('Hello From About Page '+'hey '+`${req.query.name}`+' your age is'+`${req.query.age}`);
// });

// const myServer=http.createServer(app); //app is handeler function 
// myServer.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });



//let b

// const express = require("express");
// const url=require("url");
// const  fs=require("fs");
// const app=express(); //handeler function
// app.get('/',(req,res)=>{
//      return res.send('Hello From Home Page');
// });
// app.get('/about',(req,res)=>{
//     return res.send('Hello From About Page '+'hey '+`${req.query.name}`+' your age is'+`${req.query.age}`);
// });
// app.listen(8000,()=>{'Server is running on port 3000'});


// app. METHOD(PATH, HANDLER)
// Where:
// • app is an instance of express.
// • METHOD is an HTTP request method, in lowercase.
// • PATH is a path on the server.
// • HANDLER is the function executed when the route is matched.



const express = require("express");
const url=require("url");
const  fs=require("fs");
const app=express(); //handeler function


app.get('/',(req,res)=>{
     return res.send('Hello From Home Page');
});
app.get('/about',(req,res)=>{
    return res.send('Hello From About Page '+'hey '+`${req.query.name}`+' your age is'+`${req.query.age}`);
});

app.listen(8000,()=>{'Server is running on port 3000'});