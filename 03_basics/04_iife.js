//Immediately Invoked Function Expressions(IIFE)
//global scope ke pollution se bachane ke liye iife use hoga
//the function is defined and called immediately
(function chai(){
    //named iife
    console.log("hello");
    
})();
//on using multiple iife's end iife with semicolon must
//unnamed iffe like arrow function
((name)=>{
    console.log(`hello ${name}`);   
})("alisha");

// function expression-
//  (function(){
//   });  after creating function expression we immediatellly call it using another ()