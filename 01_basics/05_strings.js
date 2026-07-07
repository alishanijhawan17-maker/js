const name="abc"
const repoCount=50
//console.log(name+repoCount+"value"); this is not a good practice to write
console.log(`my name is ${name} and my repo count is ${repoCount}`);
//this is called string interpolation

const str1 = "hello";
const str2 = new String("hello");

console.log(typeof str1); // string
console.log(typeof str2); // object

console.log(str1 == str2);  // true
console.log(str1 === str2); // false

//new String() exists to create a String wrapper object that can have properties and methods like any other object. However, JavaScript automatically creates temporary wrapper objects (autoboxing) for primitive strings when you call string methods, so using new String() manually is almost never necessary in modern JavaScript

const gameName=new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//this do not change original 
console.log(gameName.charAt(2));//at this index which char
console.log(gameName.indexOf('t'));//returns first occurence and if not then -1
console.log(gameName.split('-'));


let str="hello"
console.log(str.at(-1));//o
let str1=new String("hello")
console.log(str1.toString());//convert object to string
//trimstart() removes spaces from beginning
//trimend() remvoes spaces only from end
let num="7"
console.log(num.padStart(3,"0"));//007 add characters at beginning until desired length
//padEnd() add characters at end

console.log("hi ".repeat(3));//hi hi hi
console.log("abc"=="ABC");//false as string comparison is case sensitive






const newgame=gameName.substring(0,4)//last index not included and negative value nhi de sakte
console.log(newgame);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);//ans is ite

const newString1= "  hitesh   "
console.log(newString1.trim());//removes starting and end spaces 

const url="https://hitesh.com"
console.log(url.replace(':','-'))//replaces old with new value
console.log(url.includes('hitesh'));//true as it finds whhether it is present in url or not


















