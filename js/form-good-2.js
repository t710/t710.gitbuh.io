$(document).ready(function () {
	$("#typechoice").change(function () {
		switch ($(this).val()) {
			case 'a':						
				$("#showupsoon, #a-option").removeClass("wb-invisible").prop("disabled", "");
				$("#b-option").addClass("wb-invisible").prop("disabled", "disabled");
				break;
			case 'b':
				$("#showupsoon, #b-option").removeClass("wb-invisible").prop("disabled", "");
				$("#a-option").addClass("wb-invisible").prop("disabled", "disabled");
				break;
			default:
				$("#showupsoon,#a-option,#b-option").addClass("wb-invisible").prop("disabled", "disabled");
				break;
		}					
	});
});