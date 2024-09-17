const promise=new Promise((resolve,reject)=>{
    let a=10;
    let b=10;
    if(a===b)
    {
        resolve(30);
    }
    else{
        reject(50);
    }
});
promise.then((num1)=>{
    console.log(num1);
}).catch((num2)=>{
console.log(num2);
})