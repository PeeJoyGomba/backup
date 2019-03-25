var cars = [ "BMW ", "Benz ","Toyota "];

document.getElementById("demo").innerHTML = "There are " + cars.length + " cars ......" + cars.toString();

cars.push("Land Rover")
document.getElementById("memo").innerHTML = "There are now " + cars.length + " cars ......" + cars.toString();

cars.pop();
cars.pop();
document.getElementById("pemo").innerHTML = "There are now " + cars.length + " cars ......" + cars.toString();
