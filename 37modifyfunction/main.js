// making function 
function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript "; }
    console.log("creating a ".concat(size, " shirt and  ").concat(printMessage, " prints on it  "));
}
// creating a function with defualt message
makeShirt();
// creatin a function with medium size with defualt message
makeShirt("Medium");
// calling a function now with any size but different message
makeShirt("small", "I Love Java script");
