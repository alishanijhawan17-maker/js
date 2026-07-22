const coding=["js","ruby","java","python","cpp"]
const values= coding.forEach((item)=>{
    console.log(item);
    //return item   it isn't possible as foreach do not return a value    
})
//console.log(values);   //no value printed as it do not return anything


//filter vo values return krta hai jo condition satisfy krti hai....
const myNums=[1,2,3,4,5,6,7,8,9]
let a= myNums.filter((num)=>{
    return num>4
})
console.log(a);  //[5,6,7,8,9]

//this can be done using for each also
const b=[];
myNums.forEach((num)=>{
    if(num>4){
        b.push(num)
    }
})
console.log(b);  //[5,6,7,8,9]


const books=[
    {title:"book one",genre:"history",year:2006},
    {title:"book two",genre:"fiction",year:1987},
    {title:"book three",genre:"english",year:2000},
    {title:"book four",genre:"fiction",year:2002}
]
const userbooks=books.filter((item)=>item.genre=="fiction");
console.log(userbooks);




