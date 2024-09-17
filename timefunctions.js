//upto 10,000 timers can be used
console.time("whole time");
for(let i=0;i<10;i++)
{
    console.log("hello");
}
console.time("total time");
for(let i=0;i<=10;i++)
{
    console.timeStamp("total time");
}
console.timeEnd("total time");
console.timeEnd("whole time");