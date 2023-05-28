let confirmInfo = confirm("Bạn có phải là học viên Rikkei Academy ?");
if (confirmInfo == true) {
  studentId = prompt("Nhập mã học viên");
  studentName = prompt("Nhập tên học viên");
  console.log(`Mã học viên: ${studentId} , Tên học viên: ${studentName}`);
} else {
  alert("Chương trình kết thúc.");
}
