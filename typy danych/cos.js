const msg = "abc";
console.log(msg.toLocaleUpperCase());
const username = "maciej";
//**************tak sie powiększa jedną litere********** */
const newUsername = username.charAt(0).toLocaleUpperCase() + username.slice(1);
console.log(newUsername);

const text1 = "powiększ mnie!";
console.log(text1.toLocaleUpperCase());
const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
console.log(text2.toLocaleLowerCase());
const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
console.log(text3.slice(6));
const text4 = 'sprawdź, czy zawieram słowo "czy"';
console.log(text4.includes("czy"));
const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
console.log(text5.charAt(2));
const text6 = "pies zamień każde słowo pies, na słowo kot pies";
console.log(text6.replaceAll("pies", "kot"));
const text7 = "podziel, ten, string, od, przecinków";
console.log(text7.split(","));
////////// zaokrąglenie liczby///////////////////

const num1 = 123.523;
console.log(num1.toFixed(2));

//***********************zamiana string w number */

const num2 = "23";
console.log(parseInt(num2));
