// Enhanced Laptop Object: Construct an object for a laptop including 
// properties make, model, year, and a method describe() that logs a sentence 
// about the laptop
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myLaptop = {
    make: "dell",
    model: "e256",
    year: 2022,
    describe: function () {
        "the dell laptop is one of the best quality loptop ";
        " all over world";
        console.log("this lap top is made in ".concat(this.make, " and have model ").concat(this.model, " and year ").concat(this.year));
    },
};
myLaptop.describe();
// let dellLaptop myLaptop {}
// Array Destructuring: Given an array of objects representing different laptops,
//  each with properties `make`, `model`, and `year`, use array destructuring
//  to assign the first and second laptops to variables. Then, log these variables
var lapTopArray = [{ make: "Dell", model: "qaz123", year: 2023 },
    { make: "lenvow", model: "wsx963", year: 2021 },
    { make: "HP", model: "rfv4", year: 2020 }];
var lapTop1 = lapTopArray[0], lapTop2 = lapTopArray[1];
console.log(lapTop1);
console.log(lapTop2);
// Combining Arrays with Spread Operator: Suppose you are comparing prices of two
//  different sets of laptops. Use the spread operator to combine these arrays
//  into a single array sorted in ascending order, then log the result.
var priceList1 = [1200, 1500, 2000];
var priceList2 = [3000, 3300, 5000];
var allOverList = __spreadArray(__spreadArray([], priceList1, true), priceList2, true);
console.log(allOverList);
