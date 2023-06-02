// Nhập vào 1 số, in ra số dư trong phép chia 3 (Sử dụng toán tử 3 ngôi lồng nhau)
// remainder : số dư
const number = parseFloat(prompt("Nhập 1 số nguyên"));
const remainder = number % 3;
remainder === 0
  ? document.write("số dư là 0")
  : remainder === 1
  ? document.write("số dư là 1")
  : document.write("số dư là 2");
