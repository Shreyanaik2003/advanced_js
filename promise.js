//1..
// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("some function");
//         resolve("success");
//        },4000) ;
//     });
// };
// console.log("Fetching data");
// let p1=asyncFunc();
// //p1.then(console.log(1));
// p1.then((res)=>{
//     console.log(res);
// });



//2..promise chain



//2..

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("i am a promise")
//     resolve("success");
//     //reject("error");
// });
// };

// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise resolved",res);
// });

// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });


//3...

function getdata(dataid,datanext){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data", dataid);
        resolve("success");
        reject("error");
        if(datanext){
        datanext();
        }
    },3000);
});
}

//promise - call back hell
// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then(()=>{
//         console.log(res);
//     })
// });

//promise chaining
// getdata(1)
// .then((res)=>{
//     return getdata(2);
// })
// .then((res)=>{
//     console.log(res);
// })

//async await

async function hello(){
    console.log("hello");
}
hello();

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("200");
        },3000);
    })
}

async function getweatherdata(){
    await api();
    console.log("weather data received");
    await api();
}

async function get(){
await  getdata(1);
await  getdata(2);
await  getdata(3);
}
//IIFE
(async function (){
    await  getdata(1);
    await  getdata(2);
    await  getdata(3);
    })();
