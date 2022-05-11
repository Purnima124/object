d={}
for(var i=1;i<=2;i++){
    const a=require("readline-sync");
    var name=a.question("Enter the name")
    var age=a.question("Enter the age")
    d[name]=age
}
console.log(d)

