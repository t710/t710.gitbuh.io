$(document).ready(function () {
	$("#country").change(function () {
		switch ($(this).val()) {
			case 'false':						
				$("#province").removeClass("wb-inv");
				$("#provincedd").addClass("wb-inv");
				$("#provincedd").prop("disabled", "disabled");
				$("#province").prop("disabled", "");

				break;
			case 'CA':
				$("#provincedd").removeClass("wb-inv");
				$("#province").addClass("wb-inv");
				$("#province").prop("disabled", "disabled");
				$("#provincedd").prop("disabled", "");
				
				break;
			default:
				$("#province").removeClass("wb-inv");
				$("#provincedd").addClass("wb-inv");
				$("#provincedd").prop("disabled", "disabled");
				$("#province").prop("disabled", "");

				break;
		}					
	});

	$("#provincedd").addClass("wb-inv").prop("disabled", "disabled")
	$("#provincedd").keydown(function() {
		$("#pcode").focus();			
	});
});