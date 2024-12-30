// const http = require("http");

// const myserver = http.createServer((req, res) => {
//     //console.log(req.headers);
//     console.log(req);
//     //console.log("Server is running");
//     res.end("Hello from server Again");
// });

// myserver.listen(3000, () => {
//     console.log("Server Start");
// });



// const http = require("http");
// const fs = require("fs");
// const path=require("path");
// const myserver = http.createServer((req, res) => {
//     //fs.appendFile('server.log', log, (err) => {});
//     const log=`${Date.now()}:${req.url} New Req Received\n`;
//     fs.appendFile('log.txt', log,(err,data)=>{
//     switch(req.url){
//         case '/':
//             res.end("HomePage");
//             break;  
//         case '/abouts':
//             res.end("App about per ho");
//             break;
           
//         case '/contact':
//             res.end("yes Hum contact per Hu");
//             break;
//          default:
//             res.end("404 Error");     
//     }
//     });
// });
// myserver.listen(8000, () => {
//     console.log("Server Start");
// });


const http = require("http");
const fs = require("fs");
const url=require("url");
const myserver = http.createServer((req, res) => {
    if(req.url=="/favicon.ico")  return res.end();
    const log=`${Date.now()}:${req.url} New Req Received\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt', log,(err,data)=>{
    switch(myUrl.pathname){
        case '/':
            res.end("HomePage");
            break;  
        case '/about':
            const username=myUrl.query.myname;
            res.end(`Hi ${username}`);
            break;
           
        case '/contact':
            res.end("yes Hum contact per Hu");
            break;
        case '/search':
            const search=myUrl.query.search_query;  
            res.end(`Search Query: ${search}`);
            break;    
         default:
            res.end("404 Error");     
    }
    });
});
myserver.listen(8000, () => {
    console.log("Server Start");
});