// create rest api -json
const express = require('express');
const app = express();
const port=8000;
const datas=require('./MOCK_DATA.json');
const fs=require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// GET /users - HTML Document Render
app.get('/users',(req,res)=>{
    const html = `
  <ul>
    ${datas.map((data) => `<li>${data.first_name}</li>`).join('')}
  </ul>
`;
    res.send(
        html
    )
});

app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = datas.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  })
  .put((req, res) => {
    const id=Number(req.params.id);
    const body=req.body;
    const index = datas.findIndex((user) => user.id === id);
    if (index !== -1) {
      datas[index] = { ...datas[index], ...body };
      return res.json({ status: 'success',id:id });
      }
      else{
        return res.status(404).json({ error: "User not found" });
      }
  })
  .post((req, res) => {
    const body=req.body;
    console.log('body',body);
    datas.push({...body,id:datas.length});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(datas),(err,data)=>{
        if(err) console.log(err);
        else console.log(data);
    });
    return res.json({ status: 'success',id:datas.length });
  })
  .patch((req, res) => {
    const id=Number(req.params.id);
    const body=req.body;
    const index = datas.findIndex((user) => user.id === id);
    if (index !== -1) {
      datas[index] = { ...datas[index], ...body };
      return res.json({ status: 'success',id:id });
      }
      else{
        return res.status(404).json({ error: "User not found" });
      }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = datas.findIndex((user) => user.id === id);
    if (index !== -1) {
      datas.splice(index, 1);
      return res.json({ status: 'sucessfully delete',id:id });
    }
    else{
      return res.status(404).json({ error: "User not found" });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});