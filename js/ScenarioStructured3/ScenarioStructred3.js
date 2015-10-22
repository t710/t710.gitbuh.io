$(document).ready(function () {
	$("input#tryitOptions").click(function () {
		console.log("from doc");
		$("table#testest").trigger( "wb-init.wb-charts" );
	})
})	