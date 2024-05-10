var guestlist = ["zain", "Waqar", "salman"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi aaraha hai");
guestlist.splice(0, 1, "Ibrar");
guestlist.forEach(function (guest) { return console.log("Assalamulaikum ".concat(guest, " would you like to dinner with me")); });
