let scoreModule0 = 100; //баллы модуля Введение
let scoreModule1 = 200; //баллы модуля git
let scoreModule2 = 300; //баллы модуля js

let averageScore = (scoreModule0 + scoreModule1 + scoreModule2) / 3;

let studentName = "Olga";
let studentSurname = "Supranovich";

console.log(
  `Средний балл по каждому модулю для студента ${studentName.slice(0,1)}. ${studentSurname}: ${averageScore}`
);

function increment(x) {
  return ++x;
}

function decrement(x) {
  return --x;
}

let x = 10;

console.log(`Original value x = ${x}`);

console.log(`Increment x = ${increment(x)}`);

console.log(`Decrement x = ${decrement(x)}`);
