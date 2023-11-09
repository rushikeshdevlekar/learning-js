const accountId = 12345;
let accountEmail = "test@gmail.com";
var accountPassword = "12334";
accountCity = "Mumbai";
let accountState = "";

//accountId = 2; //not allowed
accountEmail = "dd@gmail.com";
accountPassword = "0000";
accountCity = "MH";

console.log(accountId);
console.table([accountId,accountEmail,accountId,accountPassword,accountCity,accountState]);

/* 
Prefer not to use var beacause of issues in block scope and functional scope
*/