let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amountPLN");
let resuletElement = document.querySelector(".js-value");

let rateEUR = 4.67;
let rateUSD = 4.51;
let rateTYR = 0.24;

formElement.addEventListener("submit", event => {
	event.preventDefault();

	let amount = +amountElement.value;
	let currency = currencyElement.value;

	let result;
	switch (currency) {
		case "EUR":
			result = amount / rateEUR;

			break;

		case "USD":
			result = amount / rateUSD;
			break;

		case "TYR":
			result = amount / rateTYR;
	}
	resuletElement.innerText = `${result.toFixed(2)} ${currency}`;
});
