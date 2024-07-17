// break - 반복문 탈출

// 04.while.js에 있는 방법보다 아래 방법이 더 많이 쓰임
let sumDice = 0;
let diceArray - [];
while (true) {
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice;
    if (sumDice > 21)
        break;
}
console.log(diceArray);
console.log(sumDice);