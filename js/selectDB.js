selectDB = function(gameid) {
	if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","http://delivery.inceptive.se/iths_c/select.php?q="+gameid,false);
	xmlhttp.send();
	var obj = JSON.parse(xmlhttp.responseText);
	//document.getElementById("txtHint").innerHTML = "test";
	//var obj = [];
	return obj;
};