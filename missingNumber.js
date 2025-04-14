function findMissingNumber(arr,n){
    let found=new Array(n+1).fill(false);// for map change this to let found={}

    for(let num of arr){
        found[num]=true;
    }
    let missingNumbers=[];
    for(let i=1;i<=n;i++){
        if(!found[i]){
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

let arr=[1,2,4,6,7,9,10];
let n=10;
x=findMissingNumber(arr,n);
console.log(x);


//using set

function findMissingNumbers(arr, n) {
    
    let numSet = new Set(arr);

    let missingNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}


let arr1 = [1, 2, 4, 6, 7, 9, 10];
let n1 = 10;
console.log(findMissingNumbers(arr1, n1)); // Output: [3, 5, 8]
