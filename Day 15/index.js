const express = require('express')
const server=express();
// server.get('/',
//     (req,res)=>{
//     res.send('This is from 1st middleware')
// },(req,res)=>{
//     res.send('Hello world! This is express server')
// })
// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



// const express = require('express')
// const server=express();
// server.get('/',
//     (req,res,next)=>{
//     console.log('This is from 1st middleware');
//     next();
// },
// (req,res)=>{
//     res.send('Hello world! This is express server')
// },
// )
// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// const express = require('express')
// const server=express();
// server.get('/',(req,res,next)=>{
//     console.log('This is from 1st middleware')
//     next();
// })
// server.get('/',(req,res,next)=>{
//     console.log('This is from 2rd middleware')
//     next();
// })
// server.get('/',(req,res)=>{
//     res.send('Hello world! This is express server')
// })


function firstMiddleware(req, res, next) {
    console.log("This is the first middleware");
    next();
}
function secondMiddleware(req, res, next) { 
    console.log("This is the second middleware");
    next();
}
// this is going to be executed for all request
function globalMiddleware(req, res, next) {
    console.log("This is application-middleware");
    next();
}
// route-level middelwere
server.use(globalMiddleware);
server.get('/send', [firstMiddleware, secondMiddleware], (req, res) => { 
    res.send('Hello world! This is Express Server');
});

server.listen(3100, () => {
    console.log("Server is running on port 3000");
});

