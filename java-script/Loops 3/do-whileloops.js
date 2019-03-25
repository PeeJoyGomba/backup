var cars = ["BMW" , "Benz", "Audi", "VW", "Ruf"];

var i = 0;
var text = "<ul>";
do {
   text += "<li>" + cars[i] + "</li>";
   i++;
 }while(i < 4);
 
text += "</ul>"
document.getElementById("demo").innerHTML = text;
