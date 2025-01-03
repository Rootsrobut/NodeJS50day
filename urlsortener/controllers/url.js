
const sortid=require('shortid');
const URL=require('../models/url.js')
async function handleGenerateNewShortURL(req,res) {
    const body=req.body;
    if(!body.url){
        return res.status(400).json({error:'Invalid request'});
    }
    const shortID=sortid();
    await URL.create({
        shortID:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });
    return res.json({shortID:shortID});
}
module.exports={
    handleGenerateNewShortURL
};