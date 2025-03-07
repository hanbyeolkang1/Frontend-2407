/*
 * 중첩(nested) 조건문
 */
// 윤년(Leap Year)
// 4로 나누어지면 윤년, 100으로 나누어지면 핑년, 400으로 나우어지면 윤년

let year = 2100;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(`${year}년은 윤년입니다.`);
    } else {
      console.log(`${year}년은 핑년입니다.`);
    }
  } else {
    console.log(`${year}년은 윤년입니다.`);
  }
} else {
  console.log(`${year}년은 핑년입니다.`);
}

// 코드 개선 - Refactoring
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
  console.log(`${year}년은 윤년입니다.`);
else console.log(`${year}년은 핑년입니다.`);
