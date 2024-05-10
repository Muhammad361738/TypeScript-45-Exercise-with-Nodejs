let guestlist = ["zain","Waqar","salman"];

let dontCome = guestlist[0];

console.log(dontCome,"nahi aaraha hai");

guestlist.splice(0, 1,"Ibrar");

guestlist.forEach(guest=>console.log(`Assalamulaikum ${guest} would you like to dinner with me`));