// FOR LOOP
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);    
// }



// for(let i=1;i<=10;i++){
//     console.log(`outer loop value: ${i}`);   
//     for(let j=0;j<=10;j++){
//         // console.log(`inner loop value: ${j} and inner loop value: ${i}`);
//         console.log(i + "*" + j + "=" + i*j);  //printing tables all till 10    
//     }

// }


let myArray=["apple","guava","grapes","banana"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);   
}

// break and continue
for (let index = 1; index < array.length; index++) {
    if(index==5){
        console.log(" detected 5");
        break;     
    }
    console.log(`value of index is ${index}`);   
}


for(let i=1;i<10;i++){
    if(i==5){
        console.log("5 detected");  //continue moves to next iteration simply
        continue;
    }
    console.log(i);   
}