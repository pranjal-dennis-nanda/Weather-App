let url=`http://api.weatherapi.com/v1/current.json?Key=65ecdda3adb640e28d932717241709&q=noida`;
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});