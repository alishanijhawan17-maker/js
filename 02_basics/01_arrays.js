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

myArr.shift()//removes that first element which is added by unshift
console.log(myArr);





