// let matrix = [
//     [2, 3, 4, 5],
//     [7, 8, 9, 0, 6, 7],
//     [3, 4]
// ]
// let show = "";
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         show += `${matrix[i][j]}\t`;
//     }
//     show += "\n";
// }
// console.log(show);

let numbers = [6,7,3,4,6,8,9,3];

let seri = [45,232,67,23,676,23];
// numbers.sort(function(n1, n2){
//     return n1 - n2;
// });

function compare(n1, n2){
    return n1 - n2;
}

function descending(n1, n2){
    return n2-n1;
}
numbers.sort(compare);

console.log(numbers);
console.log(seri.sort(compare).reverse());
console.log(`max : ${seri[0]}, min: ${seri[seri.length-1]}`)