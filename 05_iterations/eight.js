const n=[1,2,3]
const ans=n.reduce(function(acc,currval){
    console.log(`acc value:${acc} and currval:${currval}`);   // acc:0 currval:1 acc:1 currval:2 acc:3 currval:3
    return acc + currval;
},0)   // 0 value assigned to accumulator

const total=n.reduce((acc,currval)=> acc + currval ,0)
console.log(total);

const shopppingkart=[
    {itemname:"python",price:2000},
    {itemname:"java",price:1500},
]
const pricetopay=shopppingkart.reduce((acc,item)=>acc + item.price,0);
console.log(pricetopay);
