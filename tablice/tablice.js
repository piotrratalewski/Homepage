// //***************metody na tablicach */

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// /*dodaje cos z przodu tablice */
// numbers.unshift(-1, 0);
// console.log(numbers);
// /****oddejmuje element z indeksem 0*/
// numbers.shift();
// console.log(numbers);
// /**** push- odaje elementy na koncu dablicy-czesto uzywane */
// const colors = ["zielony", "czewpny", "srakowy"];
// console.log(colors);

// colors.push("gówno");
// console.log(colors);
// /**pop-usuwa ostatni element */
// colors.pop();
// console.log(colors);

// const test = [];
// console.log(test);
// test.unshift(1, 2, 3, 4, 5, 0);
// console.log(test);
// test.pop();
// console.log(test);
// test.shift();
// console.log(test);
// test.push("leeee leee lee");
// console.log(test);

/****map- działą podobnie do pętli zwraca nam nową tablice */
// const numbers = [1, 2, 3, 4, 5];
// function multiply(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(multiply);
// console.log(numbers);
// console.log(newNumbers);

/** push- metoda destrukcyjna, zmienia strukture orginalnego obiektu */
// numbers.push(6, 7);
// console.log(numbers);

/**concat- niedestrukcyjna- łączy dwie tablice */

// const abc = ["a", "b", "c"];
// const newAbc = numbers.concat(abc);
// console.log(newAbc);

// /***** spread -...- łączy dwie tablice i je rozsmarowywuje */

// console.log(...abc);

// const meals = ["jedz", "pij", "zol"];
// const drinks = ["ad", "dw", "re"];

// const menu = [...meals, ...drinks];
// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);
// const numbers3 = numbers.slice(-3);
// console.log(numbers3);
// const randomStuff = colors.splice(3, 5);
// console.log(colors);
// console.log(randomStuff);
// const newCars = cars.splice(2, 4, "test");
// console.log(cars);
// console.log(newCars);

// ****************** callback - funkcja którąprzekazujemy jako argument do innej funckji !!!!!!!!!!!!!!!!!!!

//* *****************filter

// const numbers = [0, 23, 48, 175, 2, 34, 11];

// // function number(x) {
// // 	return x % 2 === 0;
// // }

// // console.log(numbers.filter(number));

// /* forEach */

// numbers.forEach(number => console.log(number * 5));

// // ************inculdes

// console.log(numbers.includes(0));
// //******** indexOf- jak chcemy sprawdzic czy w tablicy czy cos jest, to wpisuje to w indexOf i jak wyskoczy -1 to znaczy ze tego nie ma  */

// console.log(numbers.indexOf(23));

/***map vs forEach */
// forEach nic nie zwraca
// map zwrócił nową tablice
// sprawdz ponizej różnice
// const numbers = [0, 1, 2, 3];

// const newNumbers = numbers.forEach(number => console.log(number * 2));
// const mapNumbers = numbers.map(number => number * 2);
// console.log(newNumbers);
// // console.log(mapNumbers);

// const letters = ["c", "d"];
// letters.unshift("a", "b");
// letters.push("e", "f");
// console.log(letters);
// console.log(letters.includes("c"));

// const numbers = [1, 2, 3, 4, 5];
// const meals = ["a", "b", "c"];
// const menu = [...numbers, ...meals];
// console.log(menu);

// const numbers = [1, 5, 13, 26, 48];
// const newNumbers = numbers.map(numbers => numbers * 5);
// console.log(newNumbers);
// for (const number of newNumbers) {
// 	if (number % 2 === 0) {
// 		console.log(`liczba parzysta  ${number}`);
// 	} else {
// 		console.log(`liczba nieparzysta ${number}`);
// 	}
// }

// const colors = ["red"];
// colors.unshift("oragne");
// colors.push("gold");
// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
// 	console.log(`mój ulubiony kolor: ${colors[i].toLocaleUpperCase()}`);
// }
// console.log("*******************");
// for (let i = 0; i < colors.length; i++) {
// 	console.log(
// 		`mój ulubiony kolor: ${
// 			colors[i].charAt(0).toLocaleUpperCase() + colors[i].slice(1)
// 		}`
// 	);
// }

const string = " mercedes, bmw, nissan, dodge";
console.log(string);
const newString = string.split(", ");
console.log(newString);

if (newString.length > 3) {
	console.log("jest ok");
} else {
	console.log("nie jest ok");
}
if (newString.includes("Audi")) {
	newString.push("cos");
} else {
	newString.pop();
}

console.log(newString);
