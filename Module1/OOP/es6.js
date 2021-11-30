class Person{
    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }
    greeting(){
        return `My name is ${this.fullName}, I'm ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(fullName, age, email){
        super(fullName, age);
        this.email = email;
    }
    // hello(){
    //     return `My name is ${this.fullName}, I'm ${this.age} years old, email: ${this.email}`;
    // }
    greeting(){
        return `${super.greeting()}, email: ${this.email}`;
    }
}

class GraduatedStudent extends Student{
    constructor(fullName, age, email, certificate){
        super(fullName, age, email);
        this.certificate = certificate;
    }
    // info(){
    //     return `My name is ${this.fullName}, I'm ${this.age} years old, email: ${this.email}, certificate: ${this.certificate}`;
    // }
    greeting(){
        // return `${super.greeting()}, certificate: ${this.certificate}`
        return `My name is ${this.fullName}, certificate: ${this.certificate}`;
    }
    //overloading 
}

// let dan = new Person("Dẩn Lê" , 18);

let hiep = new GraduatedStudent("Hiệp Đỗ", 20, 'hiep@gmail.com', "CG Huế");
// console.log(dan);
console.log(hiep.sum());
let arr = [];
// console.log(hiep.hello());
// console.log(hiep.info());