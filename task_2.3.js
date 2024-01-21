let arrScore = [
  20, 45, 35, 10, 0, 30, 40, 5, 15, 25, 50, 20, 35, 0, 10, 30, 45, 5, 40, 25,
  15, 50, 20, 40,
];

for (let i = 0; i < arrScore.length; i++) {
  for (let j = 0; j < arrScore.length - i - 1; j++) {
    console.log(`----------------------------`);
    console.log(`${i + 1}.${j + 1} итерация`);
    console.log(
      `Работаем с массивом ${arrScore.slice(0, arrScore.length - i)}`
    );
    console.log(`Сравниваем индексы ${[j]} и ${[j + 1]}`);
    console.log(`Сравниваем пару ${arrScore[j]} и ${arrScore[j + 1]}`);

    if (arrScore[j] < arrScore[j + 1]) {
      let temp = arrScore[j];
      arrScore[j] = arrScore[j + 1];
      arrScore[j + 1] = temp;
    }
    console.log(`Получился промежуточный массив ${arrScore}`);
  }
}

console.log(arrScore);
