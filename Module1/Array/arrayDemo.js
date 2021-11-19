// let arr = [3, 4, 5, 6, 7, 8];
// let arr2 = new Array(5, 4, 5, 6, 9, 8);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// }
// while (i < arr.length);

// let size = 10;
// let arr =[];
// let min = 10;
// let max = 90;
// for(let i=0;i<10;i++){
//     arr[i] = Math.floor(Math.random()*(max - min + 1) + min);
// }
// console.log(arr)

// let arr = [];
// let i = 0;
// do {
//     arr[i] = Number(prompt(`Enter arr[${i + 1}] = `));
//     if (arr[i] === 0) {
//         document.write(arr);
//         break;
//     }
//     i++;
// }
// while (true)

let arr = [];
let i = -1;
do {
    i++;
    arr[i] = Number(prompt(`Enter arr[${i + 1}] = `));
    // if (arr[i] === 0) {
    //     document.write(arr);
    //     break;
    // }
    
}
while (arr[i] != 0)