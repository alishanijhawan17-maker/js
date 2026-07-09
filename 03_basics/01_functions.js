function sayMyName(){
    console.log("alisha");  
}
sayMyName()

// function addTwoNumbers(num1,num2){  //here(num1,num2) are parameters
//     console.log(num1+num2)
// }
// const result= addTwoNumbers(3,4) // here(3,4) are arguments
// console.log("result:",result);//result:undefined
//if we pass in arguments(3,"a")--> 3a

function addTwoNumbers(num1,num2){
    return num1+num2
}
const ans=addTwoNumbers(3,4);
console.log("ans:",ans); //ans:7 jbh return krte h toh ek variable mei store krna pdhta hai


function LoginUserMessage(username){
    if(!username){
        console.log("please enter valid username");
        return;
    }
    return `${username} just logged in `
}
const res=LoginUserMessage("hitesh")
const ans1=LoginUserMessage()
console.log(res);//hitesh just logged in
console.log(ans1);//undefined just logged in 





