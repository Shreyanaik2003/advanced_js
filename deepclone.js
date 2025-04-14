function deepclone(obj){
     // Handle null, undefined, and primitive values
  if(obj===null||typeof obj!=='object'){
    return obj;
  }
  // Handle functions (copy by reference)
  if(typeof obj==='function'){
    return obj;
  }

  //handle arrays
  if(Array.isArray(obj)){
    let newarr=[];
    for(let i=0;i<obj.length;i++){
        newarr[i]=deepclone(obj[i]);
    }
    return newarr;
  }
    //handle objects
    let newobj={};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key]=deepclone(obj[key]);
        }
    }
    return newobj;

}

const obj1={
    a:1,
    b:"hello",
    c:[1,2,3],
    d:{x:10,y:20},
    e:function(){
        return "test";
    },
};

const obj2=deepclone(obj1);

obj1.c.push(4);
obj1.d.x=99;

// console.log(obj1.c);
// console.log(obj2.c);

// console.log(obj1.d.x);
// console.log(obj2.d.x);


// console.log(obj1.e===obj2.e);
// console.log(obj2);
// console.log(obj1);


//solution2
function deepcopy(obj){
  return {...obj};
}
let obj3={
  name:"john",
  age:30
}
let obj4=deepcopy(obj3);
obj3.age=40;
console.log(obj3);
console.log(obj4);

//solution3
let obj5={
  a:1,
  b:"hey",
  c:[1,2,3]
}
function deepcopy1(obj){
  let obj6={};
  for(let key in obj){
    obj6[key]=obj[key];
  }
  return obj6;
}
x=deepcopy1(obj5);
obj5.a=2;

console.log(obj5);
console.log(x);

//solution4
let obj7={
  a:1,
  b:"hey",
  c:[1,2,3]
}
let y=structuredClone(obj7);
obj7.a=3;
obj7.c.push(4);
console.log(obj7);
console.log(y);

//solution5 to swap key and value
let obj8={a:1,b:2,c:3,d:4};
function swapkeytovalue(obj8){
  let obj9={};
  for (let key in obj8){
    let x=key;
    let y=obj8[key];
    obj9[y]=x;

  }
  return obj9;
}
z=swapkeytovalue(obj8)
console.log("after swapping ",z);
