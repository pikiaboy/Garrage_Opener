webiopi().ready(init);

function init(){
	webiopi().refreshGPIO(true);
	var x = setInterval(function() { isOpen() }, 500);
	var y = setInterval(function() { getTime() }, 1000);
}

//Check to see if Garrage is open
function isOpen(){
	if(webiopi().digitalRead(4) == 0)
		document.getElementById("status").innerText = "Closed";
	else
		document.getElementById("status").innerText= "Open";
}

function getTime(){
	var d = new Date(); 
	var t = d.toLocaleTimeString();
	document.getElementById("time").innerHTML = t;
}


function toggle(){
	webiopi().toggleValue(4);
	//webiopi().outputSequence(4,500,"10");
}

