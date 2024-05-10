// creating array
var userName = ["Talha", "Waqar", "Salman", "Zain", "Admin"];
userName = [];
// check the is is not emmpty
if (userName.length === 0) {
    console.log("Your Array is empty you need some users");
}
else {
    // creating for each loop on Array
    userName.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello ".concat(user, ", Would you like to see a status report ? "));
        }
        else {
            console.log("Hello ".concat(user, ", Than you for loging again "));
        }
    });
}
