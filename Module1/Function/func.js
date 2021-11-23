// thiết kế 1 hàm tạo ra 1 mảng có 10 pt và [10,50]
// hard code ~ mã cứng
function generateArray(size, min = 10, max = 50) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    // console.log(array);
    return array;
}

let array = generateArray(10, 1, 10);
let array2 = generateArray(5);
console.log(array);
console.warn(array2);
console.log(array2.map(function(item, index){
    return item*2;
}));