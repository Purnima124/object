const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let uniques_list = [];
// i pure list k liye hai
for (i of list) {
// j me key hai
for (j in i) {
if (!uniques_list.includes(i[j])) {
uniques_list.push(i[j]);
}
}
}
console.log(uniques_list);


