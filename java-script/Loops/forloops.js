var Students = ["Spa", "Rumbi", "Shalom", "Vimbai", "Taurai", "Joy","Melody", "Tatenda",
"Gracious", "Yvonne", "Fortunate", "Patricia"];

var text= "<ul>";

for (i = 0; i< Students.length ; i++) {
    text+= "<li>" + Students[i] + "</li>" ;
}
text += "</ul>";
document.getElementById("demo").innerHTML= text;
