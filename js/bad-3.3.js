$(document).ready(function () {
	$("button#badsubmit").click(function() {
		if ($("input#fsy").val() > 2000 || $("input#fsy").val() === "") {
			alert("You have made an error in the form. Please review.");
		} else if ($("input#fsm").val() === "" || $("input#b_day").val() === "" || $("input#sin").val() === "") {
			//sin and other fields cannot be empty - but we won't tell you! bwooooaaahhahahaha
			alert("An requried field is empty.");
		} else {
			alert("Congratulations!");
		}
	})
});