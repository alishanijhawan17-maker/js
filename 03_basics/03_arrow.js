//arrow functions do not have their own this
const user={
    username:"abcde",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`); //this tells current context
        console.log(this); 
    }
}
//user.welcomeMessage();
//user.username="cdefg";//yaha pr context change hogya so this takes value from current context
//user.welcomeMessage(); //username change hogya ismei
console.log(this);//{} in node environment this refers to empty object

//browser ke andr agr isse run krenge to ans-->window as it is global object there

// function chai(){
//     let username="alice";
//     console.log(this.username);   //won't work inside a function
// }
// chai()


// const chai=function(){
//     let username="alice";
//     console.log(this.username); //undefined

// }

//ARROW FUNCTION:-
const chai= ()=>{
    let username="alice";
    console.log(this.username);  //undefined
    //console.log(this);  //undefined  
}
//explicit return: jbh return keyword use krei toh
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(5,6)); //11

//implicit return arrow function
const addtwo = (num1,num2) => (num1 +num2); //basically remove curly braces and return statement 
//move everything to single line
console.log(addtwo(3,4));

//imp: agr curly braces hote h toh hi return statement aati h
//returning an object require parenthesis
const user=()=>({
    name:"alisha",
    age:20,
})
console.log(user());

//important---->
const person={
    name:"alisha",
    normal:function(){
        console.log(this.name);   
    },
    arrow:()=>{
        console.log(this.name);   
    }
}
person.normal();//alisha
person.arrow();//undefined that's why arrow functions are not recommended as arrow objects


