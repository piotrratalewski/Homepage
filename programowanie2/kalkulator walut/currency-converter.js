{
	const calculateResults = (amount, currency) => {
		const rateEUR = 4.67;
		const rateUSD = 4.51;
		const rateTYR = 0.24;

		switch (currency) {
			case "EUR":
				return amount / rateEUR;

			case "USD":
				return amount / rateUSD;

			case "TYR":
				return amount / rateTYR;
		}
	};

	const updateResultText = (result, currency) => {
		const resuletElement = document.querySelector(".js-value");
		resuletElement.innerText = `${result.toFixed(2)} ${currency}`;
	};
	const onFormSubmit = event => {
		event.preventDefault();

		const currencyElement = document.querySelector(".js-currency");
		const amountElement = document.querySelector(".js-amountPLN");

		const amount = +amountElement.value;
		const currency = currencyElement.value;
		const result = calculateResults(amount, currency);
		updateResultText(result, currency);
	};
	const init = () => {
		const formElement = document.querySelector(".js-form");

		formElement.addEventListener("submit", onFormSubmit);
	};
	init();
}
