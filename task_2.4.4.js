const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  /*
    a: 50
    b: 2
    bonus: undefined
    sum: 52
    */
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  /*
    a: 50
    b: 2
    bonus: 50 (если sum будет < 50, то bonus = sum)
    sum: 52
    */
  return bonus;
};

 console.log(calculateBonus('q','r'))


module.exports = calculateBonus