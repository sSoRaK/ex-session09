let radian = Number(prompt("Nhập bán kính hình tròn"));
const PI = 3.14;
let circlePerimeter = 2 * PI * radian;
let circleSquare = PI * radian * radian;
document.write(`Chu vi hình tròn ${circlePerimeter} <br>`);
document.write(`Diện tích hình tròn ${circleSquare} <br>`);
