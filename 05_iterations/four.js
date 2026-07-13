const myObj={
    js:'javacript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
}
for (const key in myObj) {
    console.log(key);  //it prints all keys
    console.log(myObj[key]); //it prints all values       
}

//in arrays:--
const programming = ["js","rb","py","java","cpp"];
for (const key in programming) {
    console.log(key);  //it gives indexes which are its keys
    console.log(programming[key]);  //it gives values
    
}
// it prints 0 1 2 3 4 
// basically for of loop directly gives values and for in loop gives keys

// in map iteration not possible using for in loop

