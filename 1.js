// from collections import Counter
var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
var d3={}
var sum=0
for(let i in d1){
    for(i in d2){
        sum=d1[i]+d2[i]
        d3[i]=sum
        // d3.push(sum)
        // d2.pop(i)
    }
}
d3.push(d2)
console.log(d3)
    

// var d=(d1)+(d2)
// console.log(d)
// output should be this: {'a': 400, 'b': 400, 'd': 400, 'c': 30
