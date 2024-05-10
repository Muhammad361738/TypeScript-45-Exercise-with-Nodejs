//Define a function to print a each magician name from an array
function show_magician(magician : string[]){
    magician.forEach(name=>console.log(name));
}
// make modified magician names
function make_great(magician:string[]){
  return magician.map(name=> `Thw Great ${name}`);
}
//defininf an array containing magicians names
let magicianNames = ["Harry porter","Gandolf The Gray","Series","Saroman"];
// call the make great function
let greatMagicians = make_great(magicianNames);
// calling function 
show_magician(greatMagicians);