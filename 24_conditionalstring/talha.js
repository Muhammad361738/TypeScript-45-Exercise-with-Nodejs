var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// test for equality and umequality 
console.log("is apple s equal to  apple ?");
console.log(apple == "apple");
console.log("is apple is not equal to apple");
console.log(apple != "apple");
// test using lowercase function 
console.log("\n IS APPLE is equal apple to after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n IS Apple is not equal to apple after converting to lower case ?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical tests
// equql to 
console.log("\n Is ten is equal to twenty ?");
console.log(ten == twenty);
//Not equal to
console.log("\n Is ten is not equal to twenty ?");
console.log(ten != twenty);
// greater then 
console.log("\n is ten is greater then 0 ?");
console.log(ten > 0);
// less then 
console.log(" \n is twenty is less then 10 ?");
console.log(twenty < 10);
// Greater then or equal to 
console.log(" \n is 10 is greater then equal to 5");
console.log(ten >= 5);
// less then or equal to 
console.log("\n Is twenty is less then or equal to 10 ");
console.log(twenty <= 10);
// tests using "and" & "or" operator
// using "and"(&&)
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
// using OR || operator
console.log("\n twenty is greater then 50 OR twenty is equal to 20 ");
console.log(twenty > 50 || twenty == 20);
console.log("\n twenty is greater then 50 OR twenty is equal to 20 ");
console.log(twenty > 50 || twenty != 20);
// test whether an item is include in array
console.log("\n Is orange is include in my fruits array ?");
console.log(fruits.includes("orange"));
// Not include
console.log("\n IS orange is not include in my array ?");
console.log(!fruits.includes("orange"));
