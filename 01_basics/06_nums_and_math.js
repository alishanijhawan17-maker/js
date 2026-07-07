const value=400
console.log(value);

const balance=new Number(100)
console.log(balance);
console.log(balance.toString());//convert to string
console.log(balance.toFixed(2));//precision define krta h like 2 decimal places after number

const otherNum=23.8599
console.log(otherNum.toPrecision(3));//in total 3 places to which precision acts
const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000 commas aate h us standard according
console.log(hundreds.toLocaleString('en-IN'));//1,00,000 according to indian standard

let id=85794587255025820590
if(Number.isSafeInteger(id)){
    console.log("safe");   
}else{
    console.log("not safe");
    
}
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isNaN(balance));//false

//*************** maths */
console.log(Math);//it is a object
console.log(Math.abs(-4));//negative values turn to positive and positive remain positive
console.log(Math.round(4.6));//round off to 5
console.log(Math.ceil(-4.2));//ans should be 4 but it rounds to higher value so ans-->5
console.log(Math.floor(4.8));//ans should be 5 but ans-->4 as it get rounds off to smaller value
console.log(Math.sqrt(25));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());//gives random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1);

//creatig die 
console.log(Math.floor(Math.random()*6)+1);





















