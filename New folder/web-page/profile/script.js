function changeName(){
  document.getElementById('name-space').innerHTML = "<input type='text' name='new-name' id='n'><button onclick='uploadName()'>Change</button><br>";
  document.getElementById('n').value = window.sessionStorage.getItem("name");
}

function uploadName(){
  window.sessionStorage.setItem("name", document.getElementById('n').value);
  document.getElementById('name-space').innerHTML = "<a id='name' onclick='changeName()'>undefined</a>";
  document.getElementById('name').innerHTML = window.sessionStorage.getItem("name");
}

function changeID(){
  document.getElementById('IDSpace').innerHTML = "<input type='text' name='new-ID' id='i'><button onclick='uploadID()'>Change</button><br>";
  document.getElementById('i').value = window.sessionStorage.getItem("ID");
}

function uploadID(){
  window.sessionStorage.setItem("ID", document.getElementById('i').value);
  document.getElementById('IDSpace').innerHTML = "<b id='ID' onclick='changeID()'>undefined</b>";
  document.getElementById('ID').innerHTML = window.sessionStorage.getItem("ID");
}

function upload(){
  document.getElementById('name').innerHTML = window.sessionStorage.getItem("name");
  document.getElementById('ID').innerHTML = window.sessionStorage.getItem("ID");
  document.getElementById('Type').innerHTML = window.sessionStorage.getItem("Type");
}
