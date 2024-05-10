// Array of current users
var currentUsers = ["Talha", "Zain", "Waqar", "Salman", "Waqas"];
// Array of new user
var newUsers = ["Talha", "Zain", "Ejaz", "Sufyan", "Zeeshan"];
// creating loop through new user to check user name  availablity 
newUsers.forEach(function (newoneUser) {
    // making a conditon for user name already exist
    var ourCondition = currentUsers.some(function (currentoneUsers) { return currentoneUsers.toLowerCase() === newoneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(newoneUser, " is already Taken"));
    }
    else {
        console.log("This user ".concat(newoneUser, " is available "));
    }
});
