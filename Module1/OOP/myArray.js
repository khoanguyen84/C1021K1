class MyArray{
    constructor(arr){
        this.array = arr;
    }

    join(separetor=','){
        let str = '';
        for(let i=0; i< this.array.length; i++){
            if(i < this.array.length - 1){
                str += `${this.array[i]}${separetor}`;
            }
            else{
                str += `${this.array[i]}`;
            }
        }
        return str;
    }
}

let myArray = new MyArray([1,2,3,4]);
console.log(myArray.join('+'));