obj={}
for(var i=0;i<=2;i++){
    const r=require("readline-sync")
    var name=r.question("Enter the name :")
    var place=r.question("Enter the place :")
    obj[name]=place
}
console.log(obj)