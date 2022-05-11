var a=[{"one":1,"two":2,"three":3,"four":4}]
uniques_list=[]
for(let i of a){
    for(let j in i){
        if(!uniques_list.includes(i[j]))
        uniques_list.push(i[j])
    }
}
console.log(uniques_list)