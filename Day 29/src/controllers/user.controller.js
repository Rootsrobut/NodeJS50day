import usermodels from '../models/user.model.js';

class UserController {
  getRegister(req, res) {
    res.render('register');
  }
  postRegister(req,res){
    const {name, email, password} = req.body;
    usermodels.add(name,email,password);
  }
}
export default UserController;