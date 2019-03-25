var cars = ["BMW" , "Benz", "Audi", "VW", "Ruf"];

var i = 0;
var text = "<ul>";
while (i<4) {
  text += "<li>" + cars[i] + "</li>" + "<br>";
  i++;
}
text += "</ul>"
document.getElementById("demo").innerHTML = text;
