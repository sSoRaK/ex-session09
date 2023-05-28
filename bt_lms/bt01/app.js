let scorePhysical = Number(prompt("Nhập điểm vật lý"));
let scoreChemical = Number(prompt("Nhập điểm hóa học"));
let scoreBio = Number(prompt("Nhập điểm sinh học"));
let scoreSum = scorePhysical + scoreChemical + scoreBio;
let scoreAverage = scoreSum / 3;
document.write(`Tổng điểm 3 môn: ${scoreSum} <br>`);
document.write(`Trung bình điểm 3 môn: ${scoreAverage} <br>`);
