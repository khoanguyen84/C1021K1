class MyMath{
    static Pi = 3.14;
    static sum(arr){
        let total = 0;
        for(let i = 0; i< arr.length; i++){
            total += arr[i];
        }
        return total;
    }
}

let math = new MyMath();
let arr = [4,6,6,7,78,8,6,43,7];
console.log(MyMath.sum(arr));
