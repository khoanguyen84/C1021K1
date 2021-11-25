let bao = {};
bao.fullName = "Gia Bảo";
bao.age = 23;
bao.handsome = true;
bao.languages = [
    {
        name: "English",
        level : "A"
    },
    {
        name: "Japanness",
        level : "N3"
    }
];

bao.greeting = function(){
    return `My name is ${this.fullName}, I'm ${this.age} years old, my languages : ${this.languages[0].name}, ${this.languages[1].name}`;
}

let hiep = {
    fullName: "Hiệp Đỗ",
    age : "24",
    handsome : true,
    languages: [
        {
            name: "English",
            level : "B"
        },
        {
            name: "Japanness",
            level : "N4"
        }
    ],
    greeting: function(){
        return `My name is ${this.fullName}, I'm ${this.age} years old, my languages : ${this.languages[0].name}, ${this.languages[1].name}`;
    }
}

function Student(fullName, age){
    this.fullName = fullName;
    this.age = age;
    this.languages = [];
    //setter
    this.setHandsome = function(isHandsome){
        this.handsome = isHandsome;
    }
    //getter
    this.getHandsome = function(){
        return this.handsome;
    }
    this.setLanguages = function(lang){
        this.languages.push(lang);
    }

    this.getLanguages = function(){
        return this.languages;
    }
    this.greeting = function(){
        return `My name is ${this.fullName}, I'm ${this.age} years old, my languages : ${this.languages[0].name}, ${this.languages[1].name}`;
    }
}

let khoan = new Student("Khoan Vũ", 20);
khoan.setHandsome(true);
khoan.setLanguages({
    name : "English",
    level : "B1"
});
khoan.setLanguages({
    name : "Korean",
    level : "K1"
});

let duong = new Student("Dương Đỗ", 22);
duong.setHandsome(true);
duong.setLanguages({
    name : "France",
    level : "B1"
});
duong.setLanguages({
    name : "Thailand",
    level : "K1"
});
console.log(khoan.greeting());
console.log(duong.greeting());

// console.log(bao.age);
// console.log(hiep["fullName"]);
// console.log(bao.greeting());
// console.log(hiep.greeting())

let a1 = new Array(1,2,3,4);
let a2 = new Array('4','s','g');