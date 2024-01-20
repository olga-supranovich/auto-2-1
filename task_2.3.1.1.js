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
    scorePoints: 4500,
  },
  {
    id: 3,
    name: "Petr",
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

let setMaxScoreName = new Set();

for (let i = 0; i < arrScorePoints.length; i++) {
  if (players[i].scorePoints === maxScore) {
    setMaxScoreName.add(players[i].name);
  }
}

if (setMaxScoreName.size === 1) {
  console.log(`Player with max score points ${maxScore} is setMaxScoreName}`);
} else {
  console.log(
    `Players with max score points ${maxScore} are ${Array.from(
      setMaxScoreName
    ).join(", ")}`
  );
}
