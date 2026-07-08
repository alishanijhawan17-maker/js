//singleton==>constructor se singleton bnta hai and literals se singleton ni bnta hai

//object literals

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
//accessing elements from object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

//to change value
JsUser.email="cde@google.com"
console.log(JsUser);
//if we want that no changes should be done so we freeze object
Object.freeze(JsUser)
JsUser.email="fgh@google.com";
console.log(JsUser);//email changes to cde@google.com but after it got freeze email won't be changed it stays same





