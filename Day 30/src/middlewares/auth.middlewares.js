
const auth=(req,res,next)=>{
    if(!req.session.userEmail){
        res.redirect('/login')
        }
        else{
            next()
            }
};
export default auth;