let arrScorePoints = [];

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

for (index in players) {
  arrScorePoints.push(players[index].scorePoints);
}

let maxScore = Math.max(...arrScorePoints);

let maxScoreName=""

for (let i = 0; i < arrScorePoints.length; i++) {
  if (players[i].scorePoints === maxScore) {
    maxScoreName = players[i].name;
  }
}

console.log(`Player with max score points ${maxScore} is ${maxScoreName}`);
