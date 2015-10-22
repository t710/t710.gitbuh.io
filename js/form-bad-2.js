$(document).ready(function () {
	$("#typechoice").change(function () {
		switch ($(this).val()) {
			case 'a':						
				$("#showupsoon, #a-option").removeClass("wb-invisible").find("#sinfield").prop("disabled", "");
				$("#b-option").addClass("wb-invisible").find("#e2").prop("disabled", "disabled");
				break;
			case 'b':
				$("#showupsoon, #b-option").removeClass("wb-invisible").find("#sinfield").prop("disabled", "");
				$("#a-option").addClass("wb-invisible").find("#e1").prop("disabled", "disabled");
				break;
			default:
				$("#showupsoon,#a-option,#b-option").addClass("wb-invisible").find("input").prop("disabled", "disabled");
				break;
		}					
	});

	$("#wet-srch").focus(function() {
		$("#namefield").focus();
	});

	//and now for really bad
	$("#a-option,#b-option").keyup(function() {
		window.location.href="thanks-en.html";
	});
});