//pure function
function add(a,b){
    return a+b;
}
console.log(add(2,3));//5
console.log(add(2,3));//

//not a pure function
let c=0;
function inc(){
    c++;
    return c;
}
console.log(inc());
console.log(inc());

//not a pure function
let user={name:"meera", age:25};
function update(newage){
    user.age=newage;
    return user;
}
console.log(update(26));
console.log(user.age);

//not a pure function
let total = 0;
function addToTotal(num) {
    total += num; // Modifies external variable
}
addToTotal(5);
addToTotal(5);
console.log(total); // Changes the global state
