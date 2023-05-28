// Celsius -> Fahrenheit: C/5 = (F-32)/9 -> F = 9/5*C+32
let degreeC = Number(prompt("Nhập giá trị độ (Celsius)"));
let degreeF = (9 / 5) * degreeC + 32;
document.write(`${degreeC} có độ F là ${degreeF}`);
