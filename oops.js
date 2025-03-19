//defining object

var name="suraj"
function x(){
    let name="shreya"
    console.log(name);
}
z=x();
console.log(name);

//1...object literal
let person={
    first_name:'shreya',
    last_name:'Naik',

//method
getFunction : function () {
    return (`the name of person is ${person.first_name} ${person.last_name}`)
},

//object within object

phone_number:{
    mobile:'12345',
    landline:'6789'
}

}
console.log(person.getFunction());
console.log(person.phone_number.landline);

//2...object constructor

function person1(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
}
let person3=new person1('shreya','naik');
let person2=new person1('yajna ','naik');

console.log(person3.first_name);
console.log(`${person2.first_name}${person2.last_name}`);
console.log(person2.first_name,person2.last_name);

//3... classes

class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return(`the name of the bike is ${this.name}`);
       //return('the name of bike is' +this.name);

    }
    getMaker(){
        console.log("the maker is "+this.maker );
    }
}
//making object with the help of constructor
let bike1=new Vehicle('i20','Hyundai','sportz');
let bike2=new Vehicle('ninja','swift','200');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike2.getDetails());
console.log(bike1.getMaker());

//4...Inheritance

class Animal{
    constructor(name, color){
        this.name=name
        this.color=color
    }
    run(){
        console.log(this.name+" is running")
    }
    shout(){
        console.log(this.name+" is shouting")
    }

}
class Monkey extends Animal{
    eatBanana(){
        console.log(this.name+" is eating banana")
    }
}
let ani=new Animal("bruno","White");
let m=new Monkey("chimpu","orange");

ani.shout();
m.eatBanana();
m.run();
//ani.eatBanana(); This will throw an error

//prototype based inheritance
let parent={
    greet: function(){
        console.log("Helo from parent");
    }
};

let child=Object.create(parent);// child inherits from parent
child.greet();

//constructor based inheritance
function per(name){
    this.name=name;
}
function student(name,grade){
    per.call(this,name);//inherit properties
    this.grade=grade;
}
let student1=new student("shreya","A");
console.log(student1.name);
console.log(student1.grade);

//class based inheritance
class person4{
    constructor(name){
        this.name=name;
    }
    toString(){
        return (`Name of person: ${this.name}`);
    }

}
 class Student extends person4{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return (`${super.toString()}, student id:${this.id}`);
    }
 }
 let student2=new Student('shreya',22);
 console.log(student2.toString());


 //5..encapsulation using closures

function BankAccount(accountNumber,accountHolder,balance){
    //private variables
    let _accountNumber=accountNumber;
    let _accountHolder=accountHolder;
    let _balance=balance;

    //private function
    function showAccountDetails(){
        console.log(`account number: ${_accountNumber}`);
        console.log(`account holder :${_accountHolder}`);
        console.log(`Balance :${_balance}`);
    }

    function deposit(amount){
        _balance+=amount;
        showAccountDetails();
    }

    function withdraw(amount){
        if(_balance>=amount){
            _balance-=amount;
            showAccountDetails();
        }
        else{
            console.log("Insuffient Balance")
        }
    }
    return {
        deposit:deposit,
        withdraw:withdraw
    };

}
let myaccount=BankAccount("123456","shreya",1000);
myaccount.deposit(500);
myaccount.withdraw(2000);

//console.log(myaccount._balance);//undefined


//6..Encapsulation using private fields

class BankAccount1{
    //private fields
    #accountNumber;
    #accountHolder;
    #balance;

    constructor(accountNumber,accountHolder,balance){
        this.#accountNumber=accountNumber;
        this.#accountHolder=accountHolder;
        this.#balance=balance;
    }
    //private method
    #showAccountDetails() {
        console.log(`Account Number: ${this.#accountNumber}`);
        console.log(`Account Holder Name: ${this.#accountHolder}`);
        console.log(`Balance: ${this.#balance}`);
    }
    //public method
    deposit(amount){
        this.#balance+=amount;
        this.#showAccountDetails();
    }
    withdraw(amount){
        if(this.#balance>=amount){
            this.#balance-=amount;
            this.#showAccountDetails();
        }
        else{
            console.log('insufficient balance')
        }
    }
}
let myAccount=new BankAccount1("34567","yajna",3000);
myAccount.deposit(300);
myAccount.withdraw(2000);

//console.log(myAccount.#balance);