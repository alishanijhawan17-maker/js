// if statement
// const isUserLoggedIn=true
// if(2=="2"){
//     console.log("executed"); //executed gets printed   
// }
// else{

// }
//operators-->
// <, >, <=, >=, ==, !=, ===(strict equal) this checks data type
// !==(strictly not equal to) it compares both value and type

const score=200
if(score>100){
    const power="fly";  //here if we use var then outside also statement gets printed as var scope is global
    console.log(`power is ${power}`);   
}
//console.log(`power is ${power}`);// if const is used it can only be used inside scope

// const balance=1000
// if(balance<500){
//     console.log("less than 500");   
// }
// else if(balance<750){
//     console.log("less than 750");   
// }
// else if(balance<900){
//     console.log("less than 900");   
// }
// else{
//     console.log("less than 1200");
    
// }

// && ,|| are logical operators
const userLoggedIn=true;
const debitCard=true;
const loggedInfromGoogle= false;
const loggedInfromEmail= true;
if(userLoggedIn && debitCard){ // && condition checks both conditions
    console.log("allow to buy courses");       
}
if(loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in");
    
}


