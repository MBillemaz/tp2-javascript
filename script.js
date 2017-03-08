
var i = 0;
var alarms = [];
window.addEventListener("load",main);

function horloge(){
  window.setTimeout(horloge, 1000);
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    for(var j=0;j<alarms.length;j++)
    {
        if(alarms[j] != null && document.getElementById("check"+j).checked && alarms[j].getHours() === h && alarms[j].getMinutes()===m)
        {
            console.log("alarm enabled");
            var sound = document.createElement("audio");
            sound.setAttribute("autoplay","true");
            sound.setAttribute("src","sounds/alarm.mp3");
            sound.setAttribute("id","sound"+j);
            document.getElementById("Alarmes").appendChild(sound);
            document.getElementById("check"+j).checked = false;
        }
    }
    
    if(h < 10)
    {
        h = "0"+h;
    }
    if(m < 10)
    {
        m = "0"+m;
    }
    if(s < 10)
    {
        s = "0"+s;
    }
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
  alarme.setAttribute("id", i);
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
  var moins = document.createElement("input");
  moins.setAttribute("type", "submit");
  moins.setAttribute("id", "moins"+i);
  moins.setAttribute("value", "delete");
  moins.setAttribute("onclick", "supprAlarm("+i+")");
  heure.addEventListener("input",function(){
      var id = this.getAttribute("id").substring(5,6);
      alarms[id].setHours(this.value);
      console.log(alarms[id].getHours());
});
  
    minute.addEventListener("input",function(){
      var id = this.getAttribute("id").substring(6,7);
      alarms[id].setMinutes(this.value);
      console.log(alarms[id].getMinutes());
      
});
  
    alarms.push(current);
  
  
  alarme.appendChild(moins);
  i++;
}


function updateHour(hour)
{
    
}

function supprAlarm(j){
  document.getElementById(j).remove();
  alarms[j] = null;
  
}
