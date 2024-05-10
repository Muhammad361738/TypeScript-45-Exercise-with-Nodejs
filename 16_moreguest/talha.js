// creating array of guest list
var guestList = ["Zain", "Waqar", "Salman"];
// make variable for those guset who cannot come
var dontCome = guestList[0];
//print the name of the guest ame who is not comming
console.log(dontCome, "nahi aa sakh ta hai");
//Add and remove the name of guest in guest list Array
guestList.splice(0, 1, "Ibrar");
//Annousment of Good news of bigger Dinner table
console.log("Good News we have found a bigger table for a Dinner ");
//Add new guest name at the start of guestlist Array
guestList.unshift("Ahsan");
//Add the new guest at the end of guestList Array
guestList.push("Usman");
// find the middle index of guestList Array
var middleIndex = Math.floor(guestList.length / 2);
//Add the new guest at the middle of guestList Array
guestList.splice(middleIndex, 0, "Fahad");
// Annousment of updated list of guest
console.log("update list of our guest");
// Now sending the message for our guest
guestList.forEach(function (guest) { return console.log("Assalamualikum ".concat(guest, " would you like to diiner with me ?")); });
