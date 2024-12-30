// blocking code

// FileSystem is managed by host Operating System.
// Programming Languages have to depend on OS for accesses.

//const fs=require('fs');

// fs is a built-in module in Node.js for interacting with the file system.
// It provides a way to read and write files, as well as perform other file system operations.

// console.log('Starting to read');
// const buffer=fs.readFileSync("./text.txt");
// console.log(buffer.tostring());
// console.log('This is another opereation being performed');

// console.log('Starting to read');
// const buffer=fs.readFileSync("./text.txt",{encoding:'utf8'});
// console.log(buffer.tostring());
// console.log('This is another opereation being performed');


// console.log('Starting to read');
// const buffer=fs.readFile("./text.txt",(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString());
//     });
// console.log('This is another opereation being performed');

// create a file.
// console.log('Starting to read');
// try{
//     fs.writeFileSync("./text1.txt","Hello,World!");
// }
// catch(err){
//     console.log('err');
// }
// console.log('This is another opereation being performed');

// appand file 
// try{
//     fs.appendFileSync("./text.txt",'\n Name:sumit kumar,Age:40,Position:Manager')
// }
// catch(err){
//     console.log(arr);
// }


// // Deleting a file
// try{
//     fs.unlinkSync('./text1.txt');
// }
// catch(err){
//     console.log(err);
// }

//non blocking 

// fs.readFile('./text.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// fs.writeFile('./text1.txt','yes i am here',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('file is reaten');
//     }
// })
// fs.appendFileSync("./text.txt",'\n Name:Deva kumar,Age:40,Position:Manager',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file is updated');
// });

// fs.unlink('./text1.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file is deleted');
// })

const path=require('path');
const fs = require('fs');

const filepath=path.join('src','home','data.txt');
console.log(filepath);


const filepathresolve=path.resolve('src','home','data.txt');
console.log(filepathresolve);
console.log(path.extname(filepathresolve));

//Reading data
// fs.readFile('./text.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data.toString());
//     }
// })