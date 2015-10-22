$(document).ready(function() {
	$("#typechoice").change(function () {
		switch ($(this).val()) {
			case 'a':						
				$("#a-option").removeClass("wb-invisible").find("input").prop("disabled", "");
				$("#b-option").addClass("wb-invisible").find("input").prop("disabled", "disabled");
				break;
			case 'b':
				$("#b-option").removeClass("wb-invisible").find("input").prop("disabled", "");
				$("#a-option").addClass("wb-invisible").find("input").prop("disabled", "disabled");
				break;
			default:
				$("#a-option,#b-option").addClass("wb-invisible").find("input").prop("disabled", "disabled");
				break;
		}					
	});
});