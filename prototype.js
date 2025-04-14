let ab={
    name:"Harry",
    lang:"javascript",
    run: ()=>{
        console.log("self run")
    }
}
console.log(ab);

let g={
    run:()=>{
        console.log("run");
    }
}
g.__proto__={
    name2:"yajna"
}

ab.__proto__=g;
ab.run();
console.log(ab.name2);


// In objects

let b={
    name:"yajna",
    age:21
}
Object.prototype.print=function(){
    console.log("I am from object prototype")
}
b.print();

//In constructor functions
function Person(name){
    this.name=name;
}
Person.prototype.sayHello=function(){
    console.log(`hello, name is ${this.name}`);
};
let n=new Person("shreya");
n.sayHello();

//adding method to array prototype
let a1 = [1, 2, 3, 4, 5]
let a2 = [5, 6, 7, 8, 9]
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
console.log(a1.sum());
console.log(a2.sum());

//prototype inheritance
function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log(`${this.name} makes a noise`);
};
function Dog(name){
    Animal.call(this,name);// call the parent constructor
}

Dog.prototype=Object.create(Animal.prototype);//set up inheritance
Dog.prototype.constructor=Dog;//set the constructor property to refer to Dog
Dog.prototype.speak=function(){
    console.log(`${this.name} barks`);
};
const dog=new Dog("Tiger");
dog.speak();


//Prototype chain
let o = {
    name: "Pranjal",
    age: 21
}
let a = [1, 2, 3, 4, 5]
let s = "Hello GFG"
function p() {
    console.log('My name is xyzabc')
}
Object.prototype.common = function () {
    console.log('I am a shared method from prototype')
}
o.common()
a.common()
s.common()
p.common()

