// const http = require('http');
// const server=http.createServer((req,res)=>{
//     res.write('welcome to my application\n');
//     if(req.url=='/product'){
//         //respone ends
//         return res.end('This is product page !');
//     }
//     else if(req.url=='/user'){
//            res.end('This is user page');
//     }
//     // modifying the response 
//     //res.end('welcome to NodeJS Ninja Server');
// });
// server.listen(3100,()=>{
//     console.log('Server is running on port 3100');
// })


// Returning HTML as Response
const http = require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('./index.html').toString();
    res.end(data);
});

server.listen(3100);
console.log('Server is listening on port 3100');