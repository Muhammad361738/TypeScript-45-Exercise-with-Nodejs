//Define a function to print a each magician name from an array
function show_magician(magician : string[]){
    magician.forEach(name=>console.log(name));
}
//defininf an array containing magicians names
let magicianNames = ["Harry porter","Gandolf The Gray","Series","Saroman"];
// calling function 
show_magician(magicianNames);