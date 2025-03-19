//memory management
//stack memory (primitive)

let a="shreya"
let b=a
b="yajna"
console.log(a);
console.log(b);

//2.
function example() {
    let a = 10;  
    let b = "hello"; 
    console.log(a, b);
}

example(); 


//heap memory (non-primitive)
let userOne={
    email:'shreya@com',
    upi:'user@ybl'
}

let userTwo=userOne

userTwo.email="yes@com"
console.log(userOne)
console.log(userTwo)

//memory allocation
//Value Initialization
const n=123;
const s="string";
const obj={a:1,b:null};
const arr=[1,null,"str2"];

//Allocation via Function Calls
const d=new Date();
//const e=document.createElement("div");
const s1="string";
const s2=s1.substring(0,3);


//garbage collection
//mark and sweep method
function test(){
    let obj={name:"shreya"};// Object created in Heap
    return obj;// Still reachable after function execution
}
let data=test();// 'data' still references obj, so it is NOT garbage collected.
data=null;// Now obj becomes unreachable, and GC removes it.

//refernce counting
let obj1={};
let obj2={};
obj1.ref=obj2;
obj2.ref=obj1;//circular reference

obj1=null
obj2=null // These objects are still referenced, GC won't collect them!

//memory used
console.log(process.memoryUsage());

//memory issues
//memory leaks
var se="this say in memory"

//dom elemnts
let ele=document.getElementById('mydiv');
document.body.removeChild(ele);

//Using WeakMap and WeakSet

let weakmap=new WeakMap();
let obj1={};
weakmap.set(obj,'some value');
obj=null;

//WeakRefs and FinalizationRegistry

const registry = new FinalizationRegistry((key) => {
    console.log(`Object with key ${key} has been garbage collected.`);
});

let obj2 = {};
registry.register(obj2, "myObject");
obj2 = null; // When GC runs, the callback will execute


