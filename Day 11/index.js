const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('this is coming from nodejs server');
    console.log(req.url);
   if(req.url=='/first'){
     return res.end('\n This is first response');
   }
   res.end('\n This is default response');
});
server.listen(3200,(req,res)=>{
   console.log('\n server is listening at 3200');
});