// 생년월일 따른 나이 계산

let bYear = 1991,
  bMonth = 12,
  bDay = 5;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1; // JS는 월에 1을 더해주어야 함
let tDay = today.getDate();

let age = 0;
// 현재월이 생월보다 작은 경우
// 현재월이 생월보다 큰 경우
// 현재월이 생월보다 같은 경우 - 현재일과 생일을 비교

if (bYear < bMonth) age = tYear - bYear - 1;
else if (tMonth > bMonth) age = tYear - bYear;
else {
  if (tDay >= bDay) age = tYear = tDay;
}
console.log(`생일: ${bYear}-${bMonth}-${bDay}, 나이: ${age}`);
