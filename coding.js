async function main()
{
    try{
const a=await fetch('');
const data= await a.json();
console.log(data.id); 
    }
    catch(error)
    {
console.log("error encountered:",error);
    }
}
main();
