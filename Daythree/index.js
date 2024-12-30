const http = require("http");
const fs = require("fs");
const url=require("url");
const myserver = http.createServer((req, res) => {
    if(req.url=="/favicon.ico")  return res.end();
    const ip = req.headers['x-forwarded-for'];
    const log=`${Date.now()}:${req.method} ${req.url} from IP ${ip} New Req Received \n`;
    const myUrl=url.parse(req.url,true);
    // console.log(myUrl);
    fs.appendFile('log.txt', log,(err,data)=>{
    switch(myUrl.pathname){
        case '/':
            if(req.method=='GET') res.end("HomePage");
            break;  
        case '/about':
            const username=myUrl.query.myname;
            // console.log(myUrl.query);
            res.end(`Hi ${username}`);
            break;
           
        case '/contact':
            res.end("yes Hum contact per Hu");
            break;
        case '/signup':
            if (req.method=="GET") res. end ("This is a signup Form");
                else if (req.method === "POST") {
                // DB Query
                res. end ("'Success");
                }
                break;
         default:
            res.end("404 Error");     
    }
    });
});
myserver.listen(8001, () => {
    console.log("Server Start");
});