//const tinderUser=new Object() its ans-->{}
//above one is singleton object and niche wala is non singleton object
const tinderUser={}//ans-->{}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"abcd@gmail.com",
    fullname:{
        userfullname:{
            firstname:"alisha",
            lastname:"nijhawan",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//console.log(obj3); //{obj1:{1....},obj2:{3....}} it creates nested object instead of adding them

//object-assign method copies all properties from source object to target object
//const obj3=Object.assign({},obj1,obj2)//
//console.log(obj3);

//spread method for adding 2 objects
const obj3={...obj1,...obj2}
console.log(obj3);//{1:a,2:b,3:a,4:b}

//array of objects
const users=[
    {
        id:1,
        email:"abc@google.com",
    },
    {
        id:2,
        email:"cde@google.com",

    }
]
console.log(users[1].email);

//destructuring objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh",
}
const{courseinstructor:instructor}=course; //courseinstructor ko instructor ka name dediya
//console.log(courseinstructor);
console.log(instructor);

//api's can be in form of object or arrays and api's are JSON format










