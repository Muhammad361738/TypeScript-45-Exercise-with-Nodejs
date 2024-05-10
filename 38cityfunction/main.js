// Describe function
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("City ".concat(city, " is in ").concat(country));
}
// calling function
describeCity("Karachi");
describeCity("Lahore");
describeCity("Berlin ", "Germeny");
