const calculateBonus = require("./task_2.4.4");

describe("Suite for calculateBonus with integers", () => {
  it("Calculate bonus for sum = 51", () => {
    expect(calculateBonus(50, 1)).toEqual(50);
  });

  it("Calculate bonus for sum = 49", () => {
    expect(calculateBonus(45, 4)).toEqual(49);
  });

  it("Calculate bonus for sum = 50", () => {
    expect(calculateBonus(45, 5)).toEqual(50);
  });

});

describe("Suite for calculateBonus with decimals", () => {
  it("Calculate bonus for sum = 50.02 with decimal values ", () => {
    expect(calculateBonus(45.01, 5.01)).toEqual(50);
  });
  it("Calculate bonus for sum = 50 with 1 decimal place ", () => {
    expect(calculateBonus(45.9, 4.1)).toEqual(50);
  });
  it("Calculate bonus for sum = 50 with 2 decimal places ", () => {
    expect(calculateBonus(45.92, 4.08)).toEqual(50);
  });
  it("Calculate bonus for sum = 49.99 with 2 decimal places", () => {
    expect(calculateBonus(45.91, 4.08)).toEqual(49.99);
  });
  it("Calculate bonus for sum = 49.9 with 1 decimal place", () => {
    expect(calculateBonus(45.1, 4.8)).toEqual(49.9);
  });
});
