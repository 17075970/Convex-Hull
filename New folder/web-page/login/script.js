var logins = ["Andrei", "a"];
var passwords = ["0123", "3210"];
var names = ["Andrei Golovkin", "asd"];
var studentNumbers = ["17075970", "dsa"];
var type = ["Student", "Chef"];

function login(){
  var login = document.getElementById("login").value;
  var password = document.getElementById('password').value;

  var passed = -1;

  for(var n = 0; n < logins.length; n++){
    if(login == logins[n] && password == passwords[n]){
      passed = n;
    }
  }

  if(passed >= 0){
    window.localStorage.setItem("login", login);
    window.sessionStorage.setItem("name", names[passed]);
    window.sessionStorage.setItem("ID", studentNumbers[passed]);
    window.sessionStorage.setItem("Type", type[passed]);
    window.location = "menu.html";
  }
  else{
    document.getElementById('text').style.visibility = "visible";
  }
}
