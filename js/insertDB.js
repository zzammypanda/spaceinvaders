insertDB = function(user,score,gameid){
	if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	
    xmlhttp.open("GET","http://delivery.inceptive.se/iths_c/insert.php?q="+score+"&u='"+user+"'&v="+gameid,false);
    xmlhttp.send();
};