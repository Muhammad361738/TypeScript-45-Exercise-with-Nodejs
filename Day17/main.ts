// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby
function  hobbys (...hobbies:string []){
    console.log(`I Enjoy That ${hobbies} `)
}
hobbys("cricket","FootBall","carRacing","Boxing","cricket","FootBall","carRacing","Boxing")
// hobbys("FootBall")
// hobbys("Hookey")
// hobbys("Running")
// hobbys("CarRaising")

// Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. 
// Include at least three different activities.
let myDay : string = `Today is a good day .I start my privious incomplete AssignmentAnd 
i motivete mySelf and remember That 2024 is past 58% and i have excited to do  manythings ` ;
console.log(myDay);

// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor 
// it into an arrow function.

function areaRectangle (width : number , height : number) : number {
       return width * height 
}
 // refactor the the code into arrow function 
 let refactorFunction = ((width:number , hight: number)=>{
    return width * hight
 })
 console.log(refactorFunction(7,8));