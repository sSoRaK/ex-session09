let number1 = Number(prompt("Nhập giá trị số đầu tiên"));
let number2 = Number(prompt("Nhập giá trị số thứ hai"));
let number3 = Number(prompt("Nhập giá trị số thứ ba"));
let max = number1;
max > number2 ? max : (max = number2);
max > number3 ? max : (max = number3);
document.write(`Số lớn nhất ${max} <br>`);
let min = number2;
min < number1 ? min : (min = number1);
min < number3 ? min : (min = number3);
document.write(`Số bé nhất ${min} <br>`);
