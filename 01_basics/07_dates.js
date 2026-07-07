//Dates
let myDate=new Date()
console.log(typeof(myDate));//object

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());//important
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

//let createDate=new Date(2023,0,23)//0 represent first month
let createDate=new Date(2023,0,23,5,3)// also adds time 5:03:00AM
console.log(createDate.toDateString());//Mon Jan 23 2023

let myTimeStamp=Date.now()
console.log(myTimeStamp);//time in milliseconds
console.log(createDate.getTime());//it gives time from created date
console.log(Date.now());//miliseconds mei time
//agr time ko compare seconds mei krna h toh divide by 1000
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getDate);
console.log(newDate.getMonth);
console.log(newDate.getDay);

newDate.toLocaleString('default',{
    weekday: "long",
})














