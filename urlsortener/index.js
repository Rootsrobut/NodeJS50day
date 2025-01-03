const express = require('express');
const app = express();
app.use(express.json());
const urlRouter=require('./routes/url.js');
app.use('/url',urlRouter);
app.listen(1000,()=>{
    console.log('Server is running on port 3000');
})