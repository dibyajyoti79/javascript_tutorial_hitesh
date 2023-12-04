const accountId = 14453
let accountEmail = "dibya@google.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// acountId = 2 // not allowed
accountEmail = "dibya@microsoft.com"
accountPassword = "21212121"
accountCity = "Balasore"

console.log(accountId);
/*
    Prefer not to use var
    because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])