// var prompt = require('readline-sync');
// var n = prompt.questionInt('How many more times? ');
// d = {}
// for (let i = 1; i <= n; i++) {
// d[i] = i ** 2
// }
// console.log(d);

 const r=require("readline-sync")
 var num=r.questionInt("enter the number :")
 a={}
 for(var i=1;i<=num;i++){
  a[i]=i**2
 }
 console.log(a)
