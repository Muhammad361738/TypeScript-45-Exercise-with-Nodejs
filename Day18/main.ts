
// Make a Smartphone Object: Create a simple way to keep track of a smartphones details.
//  Include its brand, model, and other key features like how much storage it has,
//  the size of its screen, and how long its battery lasts.

let smartPhones : {
    brand : string,
    model : string,
    species : {
        phonestorage : string,
        screenSize : string,
        batteryStorage : string
    },

}={
    brand : "iPhone",
    model : "Xmax",
    species:{
        phonestorage : "16GB",
        screenSize : "6inches",
        batteryStorage: "2,500-4,000 mAh."

    }
}
console.log(smartPhones);
console.log(smartPhones.brand);                 
console.log(smartPhones.species.screenSize);
console.log(smartPhones.species.batteryStorage);


// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what
//  a computer programmer knows, like coding languages, tools, and software frameworks.
//  Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languges : ["phyton", "javaScript", "TypeScript"],
    frameWork :["React","Anguler", "vue"],
    tools : ["git","webpack","Docker"]
}

let {languges , frameWork , tools } = developerSkills;
console.log(`languge ${languges[0]} ; frameWork  ${frameWork[1]} ; tools ${tools[2]}`)


// Making Flexible Object Keys: Learn how to set up a list where you can change the name of
//  each section based on what you need at that moment, like adjusting labels based on user 
// choices
function createObjectWith(key :string , value : string){
    let dynamicObject = {};
    dynamicObject [key] = value;
    return dynamicObject
}
let userPrefrence = createObjectWith("theme", "Black");
console.log(userPrefrence)
