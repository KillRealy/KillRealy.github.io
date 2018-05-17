window.onload =  function() {
 


 
document.getElementById('goButton').onclick = someLight;


var greenLight =  document.getElementById('goLight');



var redLight = document.getElementById('stopLight');



var yellowLight = document.getElementById('slowLight');




function someLight( ) {


greenLight.style.backgroundColor = "green";

 setTimeout(clearLights,10*1000);


 


var cleanYellow = setTimeout(yellowLamp,10*1000);



}
 


function redLamp(){
redLight.style.backgroundColor = "red";

setTimeout(clearLights,10*1000);

var timer = setTimeout (backSpace,10*1000);








 }


 function yellowLamp(){
yellowLight.style.backgroundColor = "yellow";

setTimeout (clearLights,2*1000);

var cleanRed = setTimeout(redLamp,2*1000);














 }

 function backSpace(){
redLight.style.backgroundColor = "red";
yellowLight.style.backgroundColor = "yellow";

setTimeout(clearLights,2*1000);

var timer = setTimeout (someLight,2*1000);
}















function clearLights() {
  document.getElementById('goLight').style.backgroundColor = "black";
  document.getElementById('stopLight').style.backgroundColor = "black";
   document.getElementById('slowLight').style.backgroundColor = "black";
}



 }


