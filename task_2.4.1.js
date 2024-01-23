let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calculateSum(arr) {
  let sum = 0;
  arr.forEach((value) => {
    if (value > 1000) {
      sum += value;
    }
  });
  return sum;
}

function getMonthsBelowLimit(arr) {
  let arrMonthbelowLimit = []; //массив с индексами месяцев, в которых затраты <= 1000

  arr.forEach((value, index) => {
    if (value <= 1000) {
      let month = new Date(2024, index).toLocaleString("en-En", {
        month: "long",
      });
      arrMonthbelowLimit.push(month);
    }
  });
  return arrMonthbelowLimit;
}

let expectedResult = [40591, 148200, 25709];

function testCalculateSum() {
  expencesExamples.forEach((value, index) => {
    let calculatedResult = calculateSum(value.yearlyExpences);
    if (calculatedResult === expectedResult[index]) {
      console.log(`Test ${index + 1}: Calculated sum is correct`);
    } else {
      console.log(
        `${
          index + 1
        } Calculated sum: ${calculatedResult} is not equal to expected: ${
          expectedResult[index]
        }`
      );
    }
  });
}

function printMonthsBelowLimit() {
  expencesExamples.forEach((value, index) => {
    console.log(
      `Test ${
        index + 1
      }: Months with expenses below limit are ${getMonthsBelowLimit(
        value.yearlyExpences
      )}`
    );
  });
}

testCalculateSum();

printMonthsBelowLimit();
