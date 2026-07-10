//scope is basically curly braces
//global scope can be accessed inside scope but a variable declared inside scope can't be used outside
if(true){
    let a=10;
    const b=20
    var c=30
}
//console.log(a); a won't get printed as it is declared inside if
//console.log(b); b also won't get printed and give error 
console.log(c);// c gets printed which means 30 gets printed due to var keyword hence this var is not used


let a1=300
if(true){
    let a1=10;
    const b1=20;
    console.log("inner:",a1);//10 gets printed
}
console.log(a1);//300 gets printed due to global scope


function one(){
    const username="abcd";

    function two(){
        const website="youtube";
        console.log(username);   
    }
    //console.log(website);
    two()
}
one()
//here username can be used inside two but website can't be used in one 
//hence website gives error

if(true){
    const username1="abcde";
    if(username1==="abcde"){
        const website1=" netflix";
        console.log(username1 + website1); //abcde netflix
    }
    //console.log(website1); it gives error as website declared inside can't be used outside
    
}
//console.log(username1); gives error as username declared inside


//###############interesting
console.log(Addone(5));
function Addone(num){
    return num+1;
}

//addtwo gives error as cannot access addtwo before intialisation
addTwo(5)
const addTwo=function(num){
    return num+2;
}






