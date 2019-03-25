var cars = ["BMW" , "Benz", "Audi", "VW", "Ruf"];

var text= "<ul>";

for (i = 0; i< 4; i++) {
    text+= "<li>" + cars[i] + "</li>" ;
}
text += "</ul>";
document.getElementById("demo").innerHTML= text;
