

let lst = [];
let set = new Set();
set.add(-1);
for(let i = 0; i < 100; i++) {
    rand = Math.random() * 1000;
    lst.push(rand);
    set.add(rand);
}
console.log(lst);
console.log(set);