//creating an array 
let userName = ["Talha","Waqar","Salman","Zain","Admin"];
// creating for each loop on Array
userName.forEach(user=>{
    if(user==="Admin"){
        console.log(`Hello ${user}, Would you like to see a status report ? `);
    }else {
        console.log(`Hello ${user}, Than you for loging again `);
    }
 } )
