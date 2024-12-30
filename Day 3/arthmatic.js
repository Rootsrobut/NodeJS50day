// 2 ways create modules 
// 1. Common JS Module



// module.exports.sum=(x,y)=>{
//     return x+y;
// }


function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}
function mul(a,b){
    return (a*b);
}
console.log('londing arithmetic')
module.exports={
    sum:sum,
    sub:sub,
    mul:mul,
    div:div
}

// module.exports=function(x,y){
//     return x+y;
// }


// 2. ES6 Module.