const accountId=12234
let accountEmail="abc@google.com"
var accountPassword="1234"
accountCity="jaipur"
let accountState
accountId=2345
//var shouldn't be used as it gives issue in block scope and functional scope
//as accountstate wasn't defined so it gave it value undefined
console.log(accountId)//will give error as constant value can't change
console.table([accountEmail,accountPassword,accountState,accountCity])
