// Enhanced Laptop Object: Construct an object for a laptop including 
// properties make, model, year, and a method describe() that logs a sentence 
// about the laptop

let myLaptop : {
    make : string,
    model : string,
    year : number,
    describe () :any
} = {
    make : "dell",
    model : "e256",
    year : 2022,
    describe() {
        "the dell laptop is one of the best quality loptop "
        " all over world"
        console.log(`this lap top is made in ${this.make} and have model ${this.model} and year ${this.year}`)
    },
     
} 
  myLaptop.describe();

// let dellLaptop myLaptop {}


// Array Destructuring: Given an array of objects representing different laptops,
//  each with properties `make`, `model`, and `year`, use array destructuring
//  to assign the first and second laptops to variables. Then, log these variables
 let lapTopArray =[{make: "Dell", model : "qaz123",year : 2023},
                   {make : "lenvow", model : "wsx963",year : 2021},
                   {make :"HP", model : "rfv4", year : 2020}] ;
   let [lapTop1 , lapTop2] = lapTopArray;
   console.log (lapTop1) ;               
   console.log (lapTop2)  ;              
 


// Combining Arrays with Spread Operator: Suppose you are comparing prices of two
//  different sets of laptops. Use the spread operator to combine these arrays
//  into a single array sorted in ascending order, then log the result.
let priceList1 = [1200,1500,2000];
let priceList2 = [3000,3300,5000];
let allOverList = [...priceList1 , ...priceList2];
console.log(allOverList);