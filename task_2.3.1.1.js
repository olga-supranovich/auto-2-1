let arrScorePoints = [];

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: -11,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 22,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: "^%&",
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: " ",
  },
  {
    id: 5,
    name: "Vadim",
    scorePoints: "we",
  },
];

for (index in players) {
  if (typeof players[index].scorePoints === "number") {
    arrScorePoints.push(players[index].scorePoints);
  }
}
console.log(arrScorePoints);

let maxScore = Math.max(...arrScorePoints);

let setMaxScoreName = new Set();

for (let i = 0; i < arrScorePoints.length; i++) {
  if (players[i].scorePoints === maxScore) {
    setMaxScoreName.add(players[i].name);
  }
}

if (setMaxScoreName.size === 1) {
  console.log(
    `Player with max score points ${maxScore} is ${Array.from(setMaxScoreName)}`
  );
} else {
  console.log(
    `Players with max score points ${maxScore} are ${Array.from(
      setMaxScoreName
    ).join(", ")}`
  );
}
