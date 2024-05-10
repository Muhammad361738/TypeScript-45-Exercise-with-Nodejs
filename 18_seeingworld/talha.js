//Make an Array to Add those countries who you want to see 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTowlist = ["China", "Denmark", "Brazil", "Argentina", "Europe", "Filphine"];
// print the Array countries in original order
console.log("Original Order", countriesTowlist);
// print Array with Alphabetical order with out modifing the original list
console.log("Alphabetical Order : ", __spreadArray([], countriesTowlist, true).sort());
// to sure that you actual order Array are still orignal or not
console.log("Still in  Original Order", countriesTowlist);
// print Array with Reverse order with out modifing the original list
console.log(" reverse Order : ", __spreadArray([], countriesTowlist, true).reverse());
// to sure that you actual order Array are still orignal or not
console.log("Still in  Original Order", countriesTowlist);
// we change  the order of the Array 
console.log("Original Order reversed", countriesTowlist.reverse());
// again  print in original order
console.log("again reverse order to back in original order", countriesTowlist.reverse());
//print the Array in Alphabetical Order
console.log("Sorted in Alphabetical order", countriesTowlist.sort());
// again reverse Alphabetical order 
console.log("Original Order reversed", countriesTowlist.reverse());
