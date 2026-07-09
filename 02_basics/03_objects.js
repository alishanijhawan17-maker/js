//singleton==>constructor se singleton bnta hai and literals se singleton ni bnta hai

//object literals-
const a={

}
//object constructor-
const b=new Object()

//creating a symbol
const mySym=Symbol("key1")
const JsUser={
    name:"abc",
    age:19,
    [mySym]:"mykey1",//on referring to symbols we use square brackets
    location:"ludhiana",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","wednesday"]
}
//accessing elements from object it can be through dot or bracket
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

//to change value
JsUser.email="cde@google.com"
console.log(JsUser);
//if we want that no changes should be done so we freeze object
//Object.freeze(JsUser)
JsUser.email="fgh@google.com";
console.log(JsUser);//email changes to cde@google.com but after it got freeze email won't be changed it stays same

//deleting properties:-
delete JsUser.email //this would delete that property

JsUser.greeting=function(){
    console.log("hello JS user");   
}

JsUser.greeting2=function(){
    console.log(`hello JS user, ${this.name}`);
    
}
//console.log(JsUser.greeting);//function
console.log(JsUser.greeting());//correct way to print function
console.log(JsUser.greeting2());//hello JS user abc






