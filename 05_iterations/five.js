const coding=["js","python","cpp","ruby","swift"];

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

function printMe(item){
        console.log(item); 
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr); 
})


//very important--
const myCoding=[
    {
        languageName:"javscript",
        fileName:"js",
    },
    {
        languageName:"python",
        fileName:"py",
    }
]
myCoding.forEach((item)=>{
    console.log(item.fileName);
    
})