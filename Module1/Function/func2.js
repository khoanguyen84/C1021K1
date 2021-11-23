function swap(n1, n2){
    let temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(`n1: ${n1}, n2: ${n2}`); // 7-5 || 5-7
}
let n1 = 5;
let n2 = 7;
console.log(`n1: ${n1}, n2: ${n2}`);// 5-7
swap(n1, n2);
console.log(`n1: ${n1}, n2: ${n2}`);// 5-7 || 7-5