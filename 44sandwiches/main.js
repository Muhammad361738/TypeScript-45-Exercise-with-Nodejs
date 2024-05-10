// Define a function with a rest parameter accept items arugments representing our sandwiches
function makeSandwiches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwich with the following item : \n");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now Enjoy Sandwich ");
}
// calling function 3 times with 3 different arguments 
makeSandwiches("chicken", "Butter", "Mayo", "Egg");
makeSandwiches("Bread", "Butter");
makeSandwiches("chicken", "Butter", "Mayo", "Egg", "Bread", "Butter", "Tomatto", "Onion");
