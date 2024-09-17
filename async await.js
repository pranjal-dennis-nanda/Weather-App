let promise=new Promise((resolve,reject)=>{
    let status=true;
    if(status)
    {
        console.log("login successfull");
        resolve(status);
    }
    else{
        console.log("login unsuccessfull");
        reject(status);
    }
});

async function checkpromise()
{
    try{
        let data=await promise;
        console.log(data);
    }
    catch{
        console.log("error");
    }
}