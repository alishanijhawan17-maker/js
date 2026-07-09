//1) Object.keys()
const user={
    name:"abc",
    age:19,
    city:"delhi",
}
console.log(Object.keys(user));//it always return an array of keys
//["name","age","city"]

//2)Object.values()
console.log(Object.values(user));//again returns an array
//["abc",19,"delhi"]

//3)Object.entries()
console.log(Object.entries(user));//convert object into array of arrays
//[
//["name","abc"],
//["age",19],
//["city","delhi"]
//]

//4)Object.hasOwn()-->checks whether an object has a property
console.log(Object.hasOwn(user,"name"));//true

//5) Object.assign()-->combines object
const obj1={
    a:1,
}
const obj2={
    b:2,
}
const obj3=Object.assign({},obj1,obj2)
//OR Object.assign(obj1,obj2) here it get assigned to obj1 so obj1 changes

//6)spread operator
const obj3={...obj1,...obj2}

//7)Object.freeze()-->prevents modification
const user={
    name:"abc",
}
Object.freeze(user)
user.name="cde"//no changes done

//8)Object.seal()-->allows updating existing properties but prevents adding or deleting properties
Object.seal(user)
user.name="cde"//name gets changed in object
user.age=20;//doesn't add new property

//9) Object.fromEntries()--> converts array of key-value pairs into object
const arr=[
    ["name","abc"],
    ["age",20],
]
const Obj=Object.fromEntries(arr)//{name:"abc",age:20}

//important
const obj1={
    name:"abc",
}
const obj2=obj1;
obj2.name="cde";
console.log(obj1.name);//cde as it creates deep copy where same reference is there


