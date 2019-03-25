var cars = [ "BMW ", "Benz ","Toyota "];

document.getElementById("demo").innerHTML = "There are " + cars.length + " cars ......" + cars.toString();

cars.unshift("Lexus")
document.getElementById("memo").innerHTML = "There are now " + cars.length + " cars ......" + cars.toString();

cars.shift();
cars.shift();
document.getElementById("pemo").innerHTML = "There are now " + cars.length + " cars ......" + cars.toString();
