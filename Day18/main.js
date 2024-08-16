// Make a Smartphone Object: Create a simple way to keep track of a smartphones details.
//  Include its brand, model, and other key features like how much storage it has,
//  the size of its screen, and how long its battery lasts.
var smartPhones = {
    brand: "iPhone",
    model: "Xmax",
    species: {
        phonestorage: "16GB",
        screenSize: "6inches",
        batteryStorage: "2,500-4,000 mAh."
    }
};
console.log(smartPhones);
console.log(smartPhones.brand);
console.log(smartPhones.species.screenSize);
console.log(smartPhones.species.batteryStorage);
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what
//  a computer programmer knows, like coding languages, tools, and software frameworks.
//  Find a way to get three specific skills from this list and show them.
var developerSkills = {
    languges: ["phyton", "javaScript", "TypeScript"],
    frameWork: ["React", "Anguler", "vue"],
    tools: ["git", "webpack", "Docker"]
};
var languges = developerSkills.languges, frameWork = developerSkills.frameWork, tools = developerSkills.tools;
console.log("languge ".concat(languges[0], " ; frameWork  ").concat(frameWork[1], " ; tools ").concat(tools[2]));
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of
//  each section based on what you need at that moment, like adjusting labels based on user 
// choices
function createObjectWith(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPrefrence = createObjectWith("theme", "Black");
console.log(userPrefrence);
