var things = [23, "cars", "Harvey", 11];
things.push("twelve");//Add to the end of the array
document.getElementById("demo").innerHTML = "<ul>" + "<li>" + things[2] + "</li>" + "<li>" + "has" + "</li>" + "<li>" + things[4] + "</li>" + "<li>" + things[1] + "</li>" + "</ul>";
