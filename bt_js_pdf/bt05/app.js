let rate = prompt("Nhập hệ số lương");
let basicSalary = prompt("Nhập lương cơ bản");
let commission = prompt("Tỷ lệ hoa hồng");
let basic = (rate + commission) * basicSalary;
document.write("Lương của nhân viên: " + basic);
