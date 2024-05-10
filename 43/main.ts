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

// Making the copy of original Aray through slice function 

let copy_magician_name = magicianNames.slice();

// Modified the copy Array to include "The Great" with their names

let copy_great_magicians = make_great(copy_magician_name);

// show both Arrays original and copied 

// original
console.log("\n Original Array \n");
show_magician (magicianNames);
// copied
console.log("\n copied Array \n");

show_magician(copy_magician_name)