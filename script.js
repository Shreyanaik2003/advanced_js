let x=function(e){
    console.log(e.target)
    console.log(e.type, e.clientX,e.clientY)
}
let y=function(e){
    alert("Hello world 2")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)


let a=prompt('what is your fav number?');
if(a==2){
    btn.removeEventListener('click',x)
}

s1="shreya"
s2="hello "+s1;
console.log(s2);

s2=`hello, ${s1}`
console.log(s2);