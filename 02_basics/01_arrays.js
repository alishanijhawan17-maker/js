//array
//const myArr=[0,1,2,3,4,5,true,"abc"]//elements can be heterogeneous also
const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);//accesing elements in array
//creates shallow copies which means having same reference like changes in one affects other too
//new way to declare array;-
const myArr2=new Array(1,2,3,4)

//array methods
myArr.push(6)//adds element at the end
console.log(myArr);

myArr.pop()//removes last element
console.log(myArr);

myArr.unshift(9)//adds element at start and moves each element forward
console.log(myArr);

myArr.shift()//removes that first element 
console.log(myArr);

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(19));//as value don't exist in array so it returns -1

const newArr=myArr.join()
console.log(myArr);//[0,1,2,3,4,5]
console.log(newArr);//0,1,2,3,4,5 here this type is string

//slice,splice
console.log("A",myArr);

const myn=myArr.slice(1,3)
console.log(myn);//original array stays same
console.log("B",myArr);

const myn1=myArr.splice(1,3)//here elements from position 1,2,3 are removed from array
console.log("C",myArr);//original array changes as elements are removed
console.log(myn1);







