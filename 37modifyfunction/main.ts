// making function 
function makeShirt (size : string = "Large" , printMessage :string = "I love Typescript "){
    console.log(`creating a ${size} shirt and  ${printMessage} prints on it  `);
}
// creating a function with defualt message
makeShirt ();
// creatin a function with medium size with defualt message
makeShirt ("Medium");
// calling a function now with any size but different message
makeShirt ("small","I Love Java script")