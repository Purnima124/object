const list1=[]
const word="MISSISSIPPI"
let output={}
for (var i of word) {
if(list1.includes(i)){
    output[i]=output[i]+1


}else{
list1.push(i);
    output[i]=1;
}
}
console.log(output);


