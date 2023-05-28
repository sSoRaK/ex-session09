let number1 = Number(prompt("Nhập giá trị số đầu tiên"));
let number2 = Number(prompt("Nhập giá trị số thứ hai"));
if (number1 > number2) {
  number1 % number2 === 0
    ? document.write(`${number1} là bội số của ${number2}`)
    : document.write(`${number2} là bội số của ${number1}`);
} else {
  document.write("Nhập lại 2 số a, b");
}
