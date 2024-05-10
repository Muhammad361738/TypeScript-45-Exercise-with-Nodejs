//Define a function to print a each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// make modified magician names
function make_great(magician) {
    return magician.map(function (name) { return "Thw Great ".concat(name); });
}
//defininf an array containing magicians names
var magicianNames = ["Harry porter", "Gandolf The Gray", "Series", "Saroman"];
// Making the copy of original Aray through slice function 
var copy_magician_name = magicianNames.slice();
// Modified the copy Array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_name);
// show both Arrays original and copied 
// original
console.log("\n Original Array \n");
show_magician(magicianNames);
// copied
console.log("\n copied Array \n");
show_magician(copy_magician_name);
