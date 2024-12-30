export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static add(name,email,password){
    const user = new UserModel(users.length+1,name,email,password);
    users.push(user);
  }
  
  static isvalid(email,password){
    return users.find(user => user.email === email && user.password === password);
  }
}
var users=[];