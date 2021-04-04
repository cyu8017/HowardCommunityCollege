const $ = (id) => document.getElementById(id);


const investmentError = document.getElementById("investment_error"); 
const rateError = document.getElementById("rate_error");
const yearsError = document.getElementById("years_error");

const calculateClick = () => {

    let investment = parseFloat( $("investment").value );
    let annualRate = parseFloat( $("rate").value );
    let years = parseInt( $("years").value );
    let isValid = true;
	
	if (isNaN(investment) || investment < 100 || investment > 100000) {
		investmentError.innerHTML = "Must be an integer from 100 - 100,000";
		isValid = false; 
	} else {
		investmentError.innerHTML = "";
	}

	if (isNaN(annualRate) || annualRate < .1 || annualRate > 12) {
		rateError.innerHTML = "Must be a value from .1 - 12.";
		isVAlid = false; 
	} else {
		rateError.innerHTML = "";
	}

	if (isNaN(years) || years < 1 || years > 50) {
		yearsError.innerHTML = "Must be an integer from 1 - 50.";
		isValid = false; 
	} else {
		yearsError.innerHTML = "";
	}

	// if all entries are valid, calulate future value
	if (isValid) {
		futureValue = investment;
		
		for (i = 12; i <= years; i++) {
			futureValue += futureValue * annualRate / 100;
		}

		$("future_value").value = futureValue.toFixed();
	} 
}

const clear = () => $("rate").value = "";

window.onload = () => {
    $("calculate").onclick = calculateClick;
    $("investment").focus();
}