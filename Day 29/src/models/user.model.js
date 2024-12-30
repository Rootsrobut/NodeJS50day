export default class usermodels{
 constructor(id,name,email,password){
    this.id=id;
    this.name = name;
    this.email = email;
    this.password = password;
 }
 static getAll() {
    return users;
  }
  static add(id,name,email){
    const user = new usermodels(id,name,email);
    users.push(user);
  }
 
}
var users=[];