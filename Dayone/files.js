// const os=require("os");
// console.log(os.cpus().length);

// const fs=require("fs");

// Sync. • •
// return something 
//fs.writeFileSync("./test.txt", "Hello World");

// Async 
//return void 
//fs.writeFile("./test.txt", "Hello World Async", (err) =>{});



// sync 
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log (result);


// Async 
//return void 
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err){
//     console. log ("Error", err);
//     }
//     else {
//        console.log(result);
//     }
// });

//return void 
// fs.appendFileSync("./test.txt", 'Hey There\n');

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));
// fs. mkdirSync("my-docss/a/b",{recursive:true});