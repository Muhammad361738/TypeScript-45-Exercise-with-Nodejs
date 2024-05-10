// Array of current users

let currentUsers = ["Talha","Zain","Waqar","Salman","Waqas"];
// Array of new user
let newUsers = ["Talha","Zain","Ejaz","Sufyan","Zeeshan"];
// creating loop through new user to check user name  availablity 
newUsers.forEach(newoneUser =>{
    // making a conditon for user name already exist
    let ourCondition = currentUsers.some(currentoneUsers=>currentoneUsers.toLowerCase()=== newoneUser.toLowerCase())
    if(ourCondition){
        console.log(`Sorry ${newoneUser} is already Taken`);
    }
    else {
        console.log(`This user ${newoneUser} is available `);
    }
})