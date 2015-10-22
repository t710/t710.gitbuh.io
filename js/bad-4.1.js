$(document).ready(function () {
	$("span#bad").click(function() {
		$("span#bad").css({"color":"#5A306B"});
		alert("Thank you but you need to print and fill this form.");
	});
});