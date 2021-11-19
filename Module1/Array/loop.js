let arr = [4, 5, 2, 6, 8, 9, 2, 3, 2, 5, 8];

// for(let i=0;i < arr.length;i++){
//     console.log(arr[i]);
// }

// for(let index in arr){
//     console.log(`index: ${index}, value: ${arr[index]}`);
// }

// for(let item of arr){
//     // console.log(item);
//     console.log(`index: ${arr.indexOf(item)}, value: ${item}`);
// }

// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
// }

// arr = arr.map(function(item, index){
//     return item*=2;
// })

// let temp = [];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] >=6)
//     {
//         temp.push(arr[i]);
//     }
// }

// let temp = arr.filter(function (item, index) {
//     return item >= 6;
// })

// temp.forEach(function (item, index) {
//     console.log(`index: ${index}, value: ${item}`);
// });

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//      total += arr[i];
// }
// console.log(total);

// console.log(arr.reduce(function (total, item, index) {
//     return total += item;
// }));

// let isGreaterThan4 = true;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 1)
//     {
//         isGreaterThan4 = false;
//         break;
//     }
// }
// console.log(isGreaterThan4);

// console.log(arr.every(function(item, index){
//     return item >=1;
// }))

// let existingNumberGreaterThan10 = false;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 8)
//     {
//         existingNumberGreaterThan10 = true;
//         break;
//     }
// }
// console.log(existingNumberGreaterThan10);

// console.log(arr.some(function(item, index){
//     return item > 8;
// }))

// let existing2Number = false;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2)
//     {
//         existing2Number = true;
//         break;
//     }
// }
// console.log(existing2Number);
// console.log(arr.includes(2));

// console.log(arr.find(function(item, index){
//     return item > 5 && item < 9;
// }))
// console.log(arr.findIndex(function(item, index){
//     return item > 5 && item < 9;
// }))

// let str = '34554654765';
// let array = Array.from(str);
// console.log(array);
// console.log(array.join(''));

let matrix = [[11, 12, 13, 14], [1, 32, 33, 43], [11, 32, 43, 4], [12, 2, 13, 4]];
console.log(matrix)