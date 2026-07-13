const userEmail="abc@gmail.com" // if string has something then it is considered true
if(userEmail){
    console.log("got user email");   // if gets printed as string is assumed to have true value
}
else{
    console.log("don't have user email");  
}
const userEmail1="" // here string is empty thus assumed false value
if(userEmail1){
    console.log("got user email");   
}
else{
    console.log("don't have user email");  //else gets executed
}

//here if we have empty array then if gets executed and it is all based on truthy and falsy values

//falsy values-->
// false ,0 ,-0 ,BigInt 0n ,""(empty string) ,null ,undefined ,NaN

//truthy values-->
// "0"(string ke andr 0), 'false'(string ke andr), " "(space inside string),[](empty array) , {}(empty object), function(){}

//to check whether array is empty or not
// const arr=[]
// if(arr.length===0){
//     console.log("array is empty");   
// }

// to check whether object is empty or not:-
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}

// Nullish Coalescing operator (??): null undefined
 let val1;
 // val1 =5 ?? 10 here 5 gets assigned to val1
 // val1 = null ? 10 here 10 gets assigned as it checks first whether value is null or not then assigns value
 // val1= undefined ?? 10 here 10 gets printed
 //val1= null ?? 20 ?? 10   here first value which is not null gets assigned to val1 so val1=20

//ternary operator:
// condition ? true :false
const price=500;
price>450 ? console.log("yes") : console.log("no");

