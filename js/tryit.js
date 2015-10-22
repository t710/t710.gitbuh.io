function SwitchPart(aPartShow, aPartHide) {
	$(aPartShow).show();
	$(aPartHide).hide();
}

function setContent(aContent) {
	var targetDiv = $('#targetCodeDiv');

	$(targetDiv).html(aContent);
}


function runTryItCode() {
	var lContent = $('#sourceCode').val();

	setContent(lContent);
};

function getSelectedCode() {
	var lData = '';
	
	$("div[id^='row']").each( function(index) {
		var lCheck = $(this).find("input:checked");
		
		if (lCheck.length == 1) {
			lData = lData + $(this).find("input[type='hidden']").val();
		}
	});

	// convert the &gt; and &lt; back to < and >
	lData = lData.replace(/(&lt;)/g, "<")		
	lData = lData.replace(/(&gt;)/g, ">");
	lData = lData.replace(/(&quot;)/g, "\"");

	return lData;
}

function runTryItOptions() {
	/* go throught the available options and show which is choosen */
	setContent(getSelectedCode());
}

function copyTryItOptionsToCode() {
	/* go throught the available options and show which is choosen */
	$('#sourceCode').val(getSelectedCode());
	$('input#showCode').prop("checked", true);
	SwitchPart("#rawCode", "#showOptionsSection");
}

$(document).ready(function () {

 
	/* plugin the events */
	$("input#tryitRun").click(function () {
		runTryItCode();
	})

	$("input#tryitOptions").click(function () {
		console.log("from js");
		runTryItOptions();
	})

	$("input#tryitCopyToEditor").click(function () {
		copyTryItOptionsToCode();
	})
	
	$("input#showCode").click(function () {
		SwitchPart("#rawCode", "#showOptionsSection");
	})

	$("input#showOptions").click(function () {
		SwitchPart("#showOptionsSection", "#rawCode");
	})

	if (tryitStartOn == "code") {
		$("input#showCode").prop("checked","checked");
		$("div#showOptionsSection").hide();
	} else {
		$("input#showOptions").prop("checked","checked");
		$("div#rawCode").hide();	
	}

	/* and now run it first */
	runTryItCode();	
});