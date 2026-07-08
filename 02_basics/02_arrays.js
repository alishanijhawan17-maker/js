//if i am creating/checking array-->Array.method()
//if i am modifying or reading an existing array
const  marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel.push(dc)//array inside another array and push push that element inside existing array
// console.log(marvel);

const newArr=marvel.concat(dc)//here new array is created for concat function
console.log(newArr);//[thor,ironman,spiderman,superman,flash,batman]

//spread method 
// here 2 arrays get added up to form single array
const all=[...marvel,...dc]
console.log(all);

//flat method flattens nested arrays
const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const neww=arr1.flat(Infinity)
console.log(neww);//[1,2,3,4,5,6,7,6,7,4,5] all elements get flattened up

console.log(Array.from("alisha"));//it converts to array so final ans becomes=[a,l,i,s,h,a]
console.log(Array.isArray("abc"));//false as it is not array
console.log(Array.from({name:"abcd"}));//returns [] as it has no idea to make array out of keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[100,200,300]
//Array.of() and Array.from() creates array

//sort function
let fruits=["banana","apple","mango"]
fruits.sort()
console.log(fruits);//["apple","banana","mango"] it sorts alphabetically
let nums=[100,5,20,1];
nums.sort()
console.log(nums);//[1,100,20,5] js converts numbers to strings and then compare character by character
//correct way to sort nums array in ascending order
nums.sort((a,b)=>a-b)
console.log(nums);
//correct way to sort nums array in descending order
nums.sort((a,b)=>b-a)
console.log(nums);

//map function==>performs operation on every element of array and returns new array
let nums1=[1,2,3]
let double=nums1.map((num)=>{
    return num * 2;
})
console.log(nums1);//[1,2,3] original stays the same
console.log(double);//[2,4,6]

//filter function=>those elements of array are added whhich satisfy particular condition
let x=[1,2,3,4,5,6]
let y = x.filter((x1)=>{
    return x1%2==0;
})
console.log(y);//[2,4,6]

//reduce function reduces to one particular value
let nums2=[1,2,3,4]
let sum=nums2.reduce((acc,num)=>{
    return acc+num
},0)
console.log(sum);












