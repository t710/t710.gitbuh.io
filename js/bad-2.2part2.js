			$(document).ready(function () {
				var lDir = 1, lStep = 0;
				function nextStep() {
					switch (lDir) {
						case 1:
							lStep += 1;
							if (lStep === 100) {
								lDir = 2; //move back
							}
							break;
						case 2:
							lStep -= 1;
							if (lStep === 0) {
								lDir = 1; //move fowards
							}
							break;
					}

					//update screen
					$("#pb1").prop("value", lStep);

					setTimeout(nextStep, 50); //forever more
				}

				setTimeout(nextStep, 50); //start the process
			});