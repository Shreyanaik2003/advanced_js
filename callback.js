function sum(a,b){
    console.log(a+b);//sum is callback function
}

//2
function calculator(a,b, sumcallback){//calculator is higher order function
    sumcallback(a,b);
}
calculator(2,3,sum);//here sum is passed as an argument to calculator function

//anonymous function calculator is defined in 2
calculator(2, 3, function(x, y) {
    console.log(x + y);
});

//arrow function calculator is defined in 2
calculator(2, 3, (x, y) => console.log(x + y));


//..2 callback 
const hello=()=>{
    console.log("hello world");
}
//setTimeout(hello,2000);

//3.. callback
function getdata(dataid,datanext){
    setTimeout(() => {
        console.log("data", dataid);
        if(datanext){
        datanext();
        }
    },2000);
}

//callback hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,getdata(4));//in this 4 prints next 3 because it is inside function
        //In callback function we define only variable names, if we pass parameters it is given highr priority. callback can be variable, anonymous, arrow function

    });
});
