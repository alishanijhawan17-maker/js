//primitive datatype: jismei changes krne pr copy mei changes hote h
//7 type: boolean,number,null,undefined,bigint,symbol,string
const score=100
const value=100.3
//number includes both decimal and int value

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);//false
//both give diff results as both show diff data types and are unique

const bigNumber=7669870970n;
//end mei n shows it is a big int


//reference(non primitive)-->arrays,objects,functions
const fruits=["apple","banana","orange"]//array
const myObj={
    name:"abc",
    age:21,
}
const myFunction=function(){
    console.log("hello world");
    
}
//####################################memory
//stack(primitive)
//heap(non-primitive) and iss reference original value ka milta hai
let name="abc"
let anotherName=name
anotherName="cde"
console.log(name);//remains unchanged abc
console.log(anotherName);//cde

let user1={
    email:"user@google.com",
    upi:"user@ybl",

}
let user2=user1
user2.email="abc@gmail.com"
console.log(user1.email);//dono mei changes hoyenge as same reference jaata h
console.log(user2.email);




