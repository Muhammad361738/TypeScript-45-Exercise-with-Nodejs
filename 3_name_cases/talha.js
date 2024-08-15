var personName = "Muhammad Talha";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (zain) { return zain.toUpperCase(); }));
console.log(personName.replace(/\b\w/g,function(zain){return zain.toLocaleUpperCase()}));
console.log(personName.replace(/\b\w/g ,function(zain){return zain.toLocaleUpperCase()}))
console.log(personName.replace(/\b\w/g,
    function(ZAIN){
        return ZAIN.toLocaleUpperCase()
    }

))