"use strict";
var $ = function(id) {
	return document.getElementById(id);
};


var processEntries = function() {
	var topic = ($("topic").value);
	/*document.contact.submit();*/ 
        var body = ""
        window.location.assign("mailto:ios_midi_pro@outlook.com,midiproideas@gmail.com?Subject=" + topic + "&body=" );
        
	
};

var clearEntries = function() {
	$("topic").value = "General";

};


window.onload = function() {
	$("send").onclick = processEntries;
	$("reset").onclick = clearEntries;
};

