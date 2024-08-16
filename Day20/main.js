// Write a simple program that can take lots of scores and find their average.
function averageFunction() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (num1, num2) {
        return num1 + num2;
    }, 0);
    return total / (scores.length);
}
console.log(averageFunction(76, 83, 40, 58, 67, 61));
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other
//  number you give them later.
function functionNumber(num1) {
    return function (num2) {
        return num1 + num2;
    };
}
var result = functionNumber(5);
console.log(result(6));
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the users name and age.
var userProfile = (function () {
    var name = "Talha";
    var age = 19;
    return {
        displayInfo: function () {
            console.log("Name ".concat(name, " age ").concat(age));
        },
    };
})();
userProfile.displayInfo();
