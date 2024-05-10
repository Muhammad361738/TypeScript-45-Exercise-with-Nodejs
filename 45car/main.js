// define a function to create a car object with optional options....
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize acar object with manufacture and model 
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add aditional option in car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create the car object 
var my_car = createCar("Honda", "Accord", "color:Black", "sunroof:True", "year:2024");
console.log(my_car);
