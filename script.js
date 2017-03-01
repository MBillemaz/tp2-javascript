
var i = 0;
window.addEventListener("load",main);

function horloge(){
  window.setTimeout(horloge, 1000);
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    document.getElementById("Horloge").innerHTML = h + ":" + m + ":" + s;

}

function main(){
  horloge();
  document.getElementById("plus").addEventListener("click", addAlarm);
}

function addAlarm(){
  var current = new Date();
  var p = document.getElementById("Alarmes");
  var diff = document.createElement("label");
  diff.setAttribute("value", ":");
  var alarme = document.createElement("form");
  alarme.setAttribute("id", "alarme"+i);
  p.appendChild(alarme);
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "check"+i);
  alarme.appendChild(check);
  var heure = document.createElement("input");
  heure.setAttribute("type", "number")
  heure.setAttribute("min", "00");
  heure.setAttribute("max", "23");
  heure.setAttribute("id", "heure"+i);
  heure.setAttribute("value", current.getHours());
  alarme.appendChild(heure);
  alarme.appendChild  (diff);
  var minute = document.createElement("input");
  minute.setAttribute("type", "number")
  minute.setAttribute("min", "00");
  minute.setAttribute("max", "59");
  minute.setAttribute("id", "minute"+i);
  minute.setAttribute("value", current.getMinutes());
  alarme.appendChild(minute);
  var text = document.createElement("input");
  text.setAttribute("type", "text");
  text.setAttribute("id", "text"+i);
  text.setAttribute("placeholder","Nom alarme");
  alarme.appendChild(text);
  var moins = document.createElement("button");
  moins.setAttribute("type", "submit");
  moins.setAttribute("id", "moins"+i);
  moins.setAttribute("value", "efogrzep");
  moins.setAttribute("onclick", "supprAlarm("+i+")");
  alarme.appendChild(moins);
  i++;
}

function supprAlarm(j){
  document.getElementById("alarme"+j).remove();
}
