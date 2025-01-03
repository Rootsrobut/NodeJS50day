export const setLastvisit=(req,res,next)=>{
    // 1. if cookies is set,then add a local variable with last visit time data.
    if(req.cookies.lastvisit){
       res.locals.lastvisit=new Date(req.cookies.lastvisit).toISOString();
    }
    // 2. if cookies is not set,set this cookies first
    else{
        res.cookie('lastvisit',new Date().toISOString(),{
            maxAge: 2*24*60*60*1000 // 2 days in milliseconds
        });
    }
    next();
    // job of cookies is to store data on client side
    // so we can't use it to store data on server side
    //job of cookies parser is to parse cookies data on server side
    // set the data in response object how reciving  data in request object someone
    // is using cookies parser to parse cookies data on server side

}