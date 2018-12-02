var title = ["dsa", "asd", "foskvosk"];
var disc = ["klskgsf", "pvol;rlg,", "kvpdkbskvpdkbs"];
var pic = ["!", "food.jpg", "!"];

function change(i, id){
  if(i){
    document.getElementById(id).style.animationName = "in";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "#FACA7E";
    document.getElementById(id).style.color = "white";
  }
  else{
    document.getElementById(id).style.animationName = "out";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
  }
}

function nextPage(){
  window.location = "sample.html";
}

function upload(){
  for(var n = 0; n < title.length; n++){
    var index = "b" + n;

    var str = "<div class='meal'>";
    str += "<button id='i" + n + "' onmousemove='change(true, " + '"i' + n + '"' + ")' onmouseout='change(false, " + '"i' + n + '"' + ")'>Vote</button><div class='btn' id='b" + n + "' onclick='nextPage()' onmousemove='change(true, " + '"' + index + '"' + ")' onmouseout='change(false, " + '"' + index + '"' + ")'>";
    str += "<img src='" + (pic[n] == "!" ? "blank.png" : pic[n]) + "' width='100px' height='100px'>";
    str += "<div class='brief-info'>";
    str += "<h3 id='title'>" + title[n] + "</h3>";
    str += "<p id='disc'>" + disc[n] + "</p>";
    str += "</div>";
    str += "</div>";
    str += "</div>";
    document.getElementById('container').innerHTML += str;
  }
}
