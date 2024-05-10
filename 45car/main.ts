// define a function to create a car object with optional options....
function createCar (manufacturer , model,  ...options){
    // Initialize acar object with manufacture and model 
    let car = {
        manufacturer: manufacturer,
        model:model,
    };
    //Add aditional option in car object
    options.forEach(option =>{
        let [key, value] = option.split(":")
        car[key.trim()] = value.trim();
    });

    
    return car ;
}
// call the function to create the car object 
let my_car = createCar("Honda","Accord","color:Black","sunroof:True","year:2024");
console.log(my_car);