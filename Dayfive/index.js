// create rest api -json
const express = require('express');
const app = express();
const port=8000;
const datas=require('./MOCK_DATA.json');
app.use(express.json());

// GET /users - HTML Document Render
app.get('/users',(req,res)=>{
    const html = `
  <ul>
    ${datas.map((data) => `<li>${data.first_name}</li>`).join('')}
  </ul>
`;
    res.send(html);
});
// GET /api/users - List all users
app.get('/api/users',(req,res)=>{
    res.json(datas);
});;


// GET /api/users/1 - Get the user with ID 1
// GET /api/users/2 - Get the user with ID 2
// Dynamic Path Parameters  GET /api/users/:id
// :id->:Variable | Dynamic
app.get('/api/users/:id', (req, res) => {
    const id =Number(req.params.id);
    const user=datas.find(user=>user.id==id);
    return res.json(user);
});



// POST /api/users - Create new user
app.post('/api/users/:id',(req,res)=>{
     // TODO:Create new user
    return res.json({status:'pending'});
});
// PATCH /api/users/1 - Edit the user with ID 1
app.patch('/api/users/:id',(req,res)=>{
   // TODO:Edit the user with id
   return res.json({status:'pending'});
});

// DELETE /api/users/1 - Delete the User with ID 1
app.patch('/api/users/:id',(req,res)=>{
    // TODO:delete the user with id
    return res.json({status:'pending'});
 });

app.route("/api/users/:id")
.get((rea, res)=> {
const id = Number (req.params.id);
const user = users.find((user) => user.id === id);
return res. json (user);
})
.put((req, res)=>{
    return res.json({status:'pending'});
})
.patch((req, res)=>{
    return res.json({status:'pending'});
    })
.put((req, res)=>{
    return res.json({status:'pending'});
})
.delete( (req, res) =>{
    return res.json({status:'pending'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
