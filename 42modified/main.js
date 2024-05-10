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
// call the make great function
var greatMagicians = make_great(magicianNames);
// calling function 
show_magician(greatMagicians);
