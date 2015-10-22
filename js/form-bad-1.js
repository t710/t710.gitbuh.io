$(document).ready(function () {
	$("form#a11yfail input#dateBy").blur (function () {
		//if $("form#a11yfail input#dateBy").val() == 
		var now = moment();
		var userinput = moment(new Date($("form#a11yfail input#dateBy").val()));

		if (userinput.isValid() === true) {
			if (now.format("DDMMYYYY") === userinput.format("DDMMYYYY")) {
				console.log("thank you.")
			} else {
				// just to have a language fail in there as well.
				alert("Please make sure this field is validly completed.");
			}
		} else {
			// just to have a language fail in there as well.
			alert("Please make sure this field is validly completed.");
		}		
	});

	$("span#fakebutton").on("mouseup", function() {
		 window.location.assign("thanks-en.html");
	});
});