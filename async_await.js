const getdata=async()=>{
    let data="Hello world";
    return data;
}
getdata().then(data=>console.log(data));

const getdata2=async()=>{
    return Promise.resolve("Hello world");
}
getdata2().then(da=>console.log(da));

//await
const getData=async()=>{
    let y=await "Hello world";
    console.log(y);
}
console.log(1);
getData();
console.log(2);

//2. await
async function fetchdata(){
    try{
        let response=await fetch('https://api.example.com/data');
        let data=await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}


