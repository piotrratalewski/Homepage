{
	const welcome = () => {
		console.log("cześć");
	};
	welcome();
}

{
	const dark = document.querySelectorAll(".dark");
	const button = document.querySelector(".button");
	const side = document.querySelector(".container");
	const themeName = document.querySelector(".themeName");

	const onChangeClick = () => {
		side.classList.toggle("dark");
		themeName.innerText = side.classList.contains("dark") ? "lepszy" : "gorszy";
	};

	button.addEventListener("click", onChangeClick);
}
