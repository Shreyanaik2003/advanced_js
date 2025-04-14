let btn1=document.querySelector('#btn1');

btn1.onclick =(evt) =>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    
}

let btn2=document.querySelector('#btn2');
btn2.addEventListener("dblclick",()=>{
    console.log("button 2 was clicked");
    
})

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("you are inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    
}



let modBtn=document.querySelector('#mode')
let currMode="Light";

modBtn.addEventListener('click',()=>{
    console.log("you are trying to change mode");
    if(currMode==='light'){
        currMode="dark"
        document.querySelector("body").style.backgroundColor='black';
        document.querySelector("body").classList.add("dark");
    }
    else{
        currMode="light"
        document.querySelector("body").style.backgroundColor='white';
    }
    console.log(currMode)
})


//keydown and keyup event
document.getElementById("textbox").addEventListener("keydown",function(event){
    document.getElementById("output").innerText=`you pressed ${event.key}`;
});

document.getElementById("textbox1").addEventListener("keyup",function(event){
    document.getElementById("output1").innerText=`you pressed ${event.key}`;
});

//mouseout and over event
const button=document.getElementById("mybutton");
button.addEventListener("mouseout",()=>{
    button.style.backgroundColor="red";
    console.log("mouse left the button");
});
button.addEventListener("mouseover",()=>{
    button.style.backgroundColor="green";
    console.log("mouse entered the button");
});

//load event
window.addEventListener("load",()=>{
    console.log("page fully loaded");
    alert("welcome, page loaded sucessfully");
});

//load image
window.onload=()=>{
const img=document.getElementById("myimg");
img.addEventListener("load",()=>{
    console.log("image loaded");
    alert("image loaded sucessfully");
});

img.src="images/download (9).jpeg"
};


//submit from
document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();

    const username=document.getElementById("username").value;
    const message=document.getElementById("message");

    if(username.trim()===""){
        message.textContent="username is required";
        message.style.color="red";
    }
    else{
        message.textContent=`form submitted ${username} `;
        message.style.color="green";
    }
});

//scroll event
const backtotop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        backtotop.style.display="block";

    }else{
        backtotop.style.display="none";

    }
});

backtotop.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});

//focus and blur event
const password=document.getElementById("password");
const hint=document.getElementById("hint");

password.addEventListener("focus",()=>{
    hint.style.display="block";
});
password.addEventListener("blur",()=>{
    hint.style.display="none";
});


//resize event
window.addEventListener("resize",()=>{
    document.body.style.backgroundColor=window.innerWidth<600?"red":"green";
});