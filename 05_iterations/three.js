// for of loop:--
const arr=[1,2,3,4,5]
for (const num of arr) {  // it can be applied to strings even
    console.log(num);  
}

// const greetings= "hello world!"
// for (const greet of greetings) {
//     console.log(`each char of greetings is ${greet}`); 
// }

// Maps--> map holds key value pairs and remember original insertion order of keys
// it holds only unique values
const newMap= new Map()
newMap.set('IN','India');
newMap.set('USA','United States of America');
newMap.set('Fr','France')
console.log(newMap);

for (const [key,value] of newMap) {
    console.log(key,':-',value);    
}


//object iteration:-- here object is not iterable using for of loop
// const obj={
//     game1:'NFS',
//     game2:'spiderman',
// }
// for (const [key,value] of obj) {
//     console.log(key,':-',value);
    
    
// }
