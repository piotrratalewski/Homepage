console.log("cześć");

let dark = document.querySelectorAll(".dark");
let button = document.querySelector(".button");
let side = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
	if (side === dark) {
		site.classList.toggle("dark");
	} else {
		side.classList.toggle("dark");
	}
	themeName.innerText = side.classList.contains("dark") ? "lepszy" : "gorszy";
});
