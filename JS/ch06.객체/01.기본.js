/*
 * 객체(object)
 */

// 1. 자료구조의 의미 - 파이썬의 딕셔너리, 자바의 맵과 유사함
//      키, 벨류의 조합
let personArray = ["James", 27, "남자", "프로그래머", 175.2];
let personObject = {
  name: "James",
  age: 27,
  gender: "남자",
  job: "프로그래머",
  height: 175.2,
};

// 2. 객체 본연읜 의미 - 속성(attribyte)과 매소드(method) 사물을 묘사
const pet = {
    name: '구름'
    eat: function(food = '뼈다귀') {
        console.log(`${food} 을/를 먹습니다.`);
    }
}

console.log(pet.name);
pet.eat();

// 객체에 대한 접근
console.log(personObject.job);          // 이렇게 사용하느 것이 일반적        
console.log(personObject['job']);       // 이런식으로 사용하지 않는다.
let key = 'job';
console.log(personObject[key]);         // key 값을 변수로 사용하는 경우

// 배열은 객체의 특수한 형태
console.log(typeof personArray);
let frultArray = ['감', '밤', '배'];
let fruitObject = {0: '감', 1: '밤', 2: '배'};
