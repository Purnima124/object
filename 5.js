// Write a program to take 1 input and check whether given input exists in our object or
//  not, if it exists print exists or else prints not exist.
// Example :
// dict={“name”:”Raju”, “marks”:56}
// if input is “name” then output will be “exist”
// If input is “class” then output will be “not exists”.

// var readline = require('readline-sync');
// let n =readline.question('Enter the property key:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
//     console.log("exists");
// break
// }else{
//     console.log("not exist");
// break
// }
// }

dict={"name":"Raju","marks":56}
var r=require("readline-sync")
var key=r.question("enter the key")
if (key in dict){
    console.log("exists")
}else{
    console.log("not exists")  
}