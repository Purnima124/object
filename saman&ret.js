b={}
for(var i=0;i<=2;i++){
    const r=require("readline-sync")
    var saman=r.question("enter the saman :")
    let ret=r.questionInt("enter the ret :")
    b[saman]=ret
}
console.log(b)