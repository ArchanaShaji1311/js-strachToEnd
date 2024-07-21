const accountId = 144553
let accountEmail = "archanashaji13@gmail.com"
var accountPassword = "123"
/*
  Prefer not use (var) because of issue related to block scope and functional scope
*/
accountCity = "Morena" // not preferred as well
//accountId = 2 --> cannot redefine since it is constant
console.log(accountId);
console.table([accountId , accountEmail,accountPassword,accountCity])