var cars = [ "BMW ", "Peugot", "Benz ", "Skoroskoro","Toyota "];

document.getElementById("demo").innerHTML = "There are " + cars.length + " cars ......" + cars.toString();

cars.splice( 4,0, "Altezza")
document.getElementById("remo").innerHTML = "There are now " + cars.length + " cars ......" + cars.toString();
