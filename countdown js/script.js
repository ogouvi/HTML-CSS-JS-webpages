
        
var expires = new Date('August 29, 2022').getTime();

function countdown(){

var today = new Date();
var dateL= expires- today;

var  days = Math.floor(dateL/(1000 *60*60*24));
var  hours = Math.floor((dateL % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var  minutes = Math.floor((dateL % (1000 * 60 * 60)) / (1000 * 60));
var  seconds = Math.floor((dateL % (1000 * 60)) / 1000);

 

 document.getElementById("dys").innerHTML = days;
 document.getElementById("hrs").innerHTML = hours;
 document.getElementById("mns").innerHTML = minutes;
 document.getElementById("secs").innerHTML =seconds;

 console.log(seconds);

}

countdown();
setInterval(countdown,1000);