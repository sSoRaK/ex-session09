// đảo ngược (567 -> 765)
let number = Number(prompt("Nhập số có 3 chữ số"));
let digit3 = number % 10; //số hàng đơn vị
let digit2 = Math.floor((number % 100) / 10); //số hàng chục
let digit1 = Math.floor(number / 100); //số hàng trăm
let result = digit3 * 100 + digit2 * 10 + digit1;
document.write(`Số đảo ngược của ${number} là ${result}`);
