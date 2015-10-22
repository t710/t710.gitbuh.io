$("span#bad").click(function() {
	$("span#bad").css({"color":"#5A306B"});
	alert("Thank you but that content has not been completed yet.");
});


var lTimes = 0;
$("button#badbutton").keydown(function(event) {
	//console.log(event.which);
	if (event.which === 32) {
		event.stopPropagation();
		event.preventDefault();
	}
}).mouseup(function() {
	alert("Hello mouse user!");
});;
$("button#itsatrap").keydown(function(event) {
	//cancel the event - we are *bbbbbbbbaaddddd*
	lTimes += 1;

	if (lTimes < 10) {
		$("div#getoutmessage").text("Keyboard trap will be disabled with " + (10 - lTimes) + " more keystrokes.");
		event.stopPropagation();
		event.preventDefault();
	} else if (lTimes === 10) {
		$("div#getoutmessage").text("Keyboard trap disabled.");
	}
}).keyup(function(event) {
	if (lTimes > 9 && (event.which === 32 || event.which == 13)) {
		alert("Pesky keyboard user, hello...");
	}
}).mouseup(function() {
	alert("Hello again mouse user!");
});