webiopi().ready(init);

function init(){
	webiopi().setFunction(4,"OUT");
	webiopi().setFunction(17,"IN");
	webiopi().refreshGPIO(true);
	
	//Update time every second
	setInterval(function() { getTime() }, 1000);	
	
	//Check every 500ms if garrage is open
	setInterval(function() { isOpen() }, 500);
	
	//Auto-Close door
	setInterval(function() { autoClose() }, 1000);
}

function autoClose(){
	var d = new Date();	
	
	if(d.getHours() > 22 || d.getHours() < 5 && isOpen())
	{
		toggle();
	}
			


}

//Check to see if Garrage is open
function isOpen(){
	if(webiopi().digitalRead(17) == 0)
		{
			document.getElementById("status").innerText = "Closed";
			return false;
		}
	else
		{
			document.getElementById("status").innerText= "Open";
			return true;
		}
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

