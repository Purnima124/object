// from collections import Counter
// var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
// my_dict={
//     'a':50, 
//     'b':58, 
//     'c':56,
//     'd':40, 
//     'e':100, 
//     'f':20
//     }
// var b=[]
// var k=(my_dict)
// high=k(3)
// for (i in high){
//     b.push(i[1])
// }
// console.log(b)


a={
    'a':50, 
    'b':58, 
    'c':56,
    'd':40, 
    'e':100, 
    'f':20
    }
// var b=[]
max=0
for(let i in a){
    n=a[i]
    if(n>max){
        max=n
    }
    
}
console.log(max)