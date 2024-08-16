// Double Numbers in an Array: Make a list of numbers. 
// Then, use a trick to make a new list where each number is twice its original value.
var myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squreNum = myNum.map(function (twiceNum) {
    return twiceNum * twiceNum;
});
console.log(squreNum);
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixItem = [1, 698, "talha", 183, 'zain ', false, 69, "waqar", true, 87, false, "salman"];
var onlyString = mixItem.filter(function (str) {
    return typeof str === "string";
});
console.log(onlyString);
// Find the Average Grade: Given a list of grades, calculate the average grade.
var muArray = [58, 67, 40, 61, 76, 83,];
var averageGrade = muArray.reduce(function (init, curr) {
    return init + curr / 550 * 100;
}, 0);
console.log(averageGrade);
