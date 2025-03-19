//1...regular function
const person={
    name:"alice",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);// Hello, my name is Alice
    }
};
person.greet();

//regular inside setTimeout
const person1={
    name:"Alice",
    greet:function(){
        setTimeout(function(){
        console.log(`Hello, my name is ${this.name}`);//Hello, my name is Undefined
        },1000);
    }
};

person1.greet();

const person3 = {
    name: "Alice",
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, my name is ${this.name}`);
        }.bind(this), 1000);  //  Explicitly binding `this`
    }
};

person3.greet(); //  Hello, my name is Alice

//arrow function
const person4={
    name:"alice",
    greet:()=>{
        console.log(`Hello, my nmae is ${this.name}`);
    }
};
person4.greet();
//fix this in arrow

const person5={
    name:"alice",
    greet:function(){
        setTimeout(()=>{
            console.log(` hello, my name is ${this.name}`);
        },1000);
    }
};
person5.greet();

//2... method invocation using class

class car{
    constructor(brand){
        this.brand=brand;
    }
    showBrand(){
        console.log("car brand: "+this.brand);
    }
    display(){
        console.log("displaying car details..");
        this.showBrand();//invoking method
        
    }
}
const mycar=new car("Toyota");
mycar.display();
mycar.showBrand();
//car.display(); direct class can't be used

//3.. method invocation using object
const person6={
    name:"shreya",
    greet: function(){
        console.log("Hello, "+this.name);
    },
    introduce:function(){
        console.log("Introducing..");
        this.greet();//invoking method
    }
};
person6.introduce();


//4.. constructor function

function Person(first,last){
    this.firstname=first,
    this.lastname=last,
    //constructor function method
    this.getFullname=function(){
        return this.firstname+" "+this.lastname
    }
}
const person7=new Person("elon","musk");
const person8=new Person("bill","Gates");

//adding a property to an object
person7.age=52;
console.log(person7);
console.log(person8.age);//undefined

//adding new property to constructor
Person.nationality="english";//undefined

Person.prototype.nationality="english";
console.log("nationality is "+person7.nationality);


//method added to an object
person8.greet=function(){
    console.log("Hello , Greetstack");
}
person8.greet();

//constructor method is called
console.log(person7.getFullname());

//changing the value (lastname)of  object person7 using methods
person7.changename=function (name){
    this.lastname=name;
}
person7.changename("naik");
console.log(person7);

//changing the value (firstname) of constructor Person using  methods
Person.prototype.changename1=function (name){
    this.firstname=name;
}
person7.changename1("shreya");
console.log(person7);
console.log(person8);

//to display nationality property
console.log(Object.getPrototypeOf(person7));

console.log(person7.hasOwnProperty("firstname"));
console.log(person7.hasOwnProperty("nationality"));

