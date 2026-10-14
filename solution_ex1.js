/**
 * Môn học: [RL-IT103B-K25] - Xây dựng ứng dụng web với Javascript
 * Bài tập: Bài 1 - Session 4
 * Tên file: solution_ex1.js
 * 
 * GHI CHÚ GIẢI THÍCH 2 LỖI LOGIC ĐÃ SỬA:
 * 1. Lỗi Off-by-one Error trong vòng lặp for:
 *    - Ban đầu: for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)
 *    - Nguyên nhân: Sử dụng dấu '<' khiến vòng lặp chỉ chạy 2 lần khi orderQuantity = 3, dẫn đến thiếu mất 1 ly nước trong hóa đơn.
 *    - Khắc phục: Sửa lại điều kiện thành '<=' (cupIndex <= orderQuantity) để duyệt đúng đủ số lượng ly khách đặt.
 * 
 * 2. Lỗi đặt sai phạm vi chiết khấu (Scope/Placement Error):
 *    - Ban đầu: Câu lệnh if (isGoldMember) { totalBill = totalBill * 0.9; } nằm bên trong thân vòng lặp for.
 *    - Nguyên nhân: Việc này làm mức giảm giá 10% bị nhân dồn liên tục sau mỗi ly nước được cộng vào, gây sai lệch tài chính nặng nề.
 *    - Khắc phục: Đưa câu lệnh tính chiết khấu ra BÊN NGOÀI vòng lặp for, chỉ áp dụng một lần duy nhất sau khi đã cộng tổng tiền toàn bộ các ly.
 */

const drinkName = 'Phin Sữa Đá';
const basePrice = 29000;
const drinkSize = 'M';
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === 'M') {
  sizeUpcharge = 6000;
} else if (drinkSize === 'L') {
  sizeUpcharge = 10000;
}

// Tính chính xác giá tiền cho 1 ly hoàn chỉnh
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;

// Sửa lỗi 1: Dùng dấu '<=' để duyệt đúng đủ số lượng ly khách đặt
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}

// Sửa lỗi 2: Đưa logic chiết khấu ra ngoài vòng lặp, chỉ áp dụng 1 lần duy nhất
if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log('Tổng thanh toán:', totalBill, 'VNĐ');
