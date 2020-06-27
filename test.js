const sortStringsInArray = require("./sort");

describe("sortStringsInArray", () => {
  it("sorts strings contains number values from smallest to biggest baed on the number values", () => {
    const sortedArray = sortStringsInArray([
      "11 apple",
      "3 apple",
      "4 apple",
      "2 apple",
      "1 apple",
    ]);
    expect(sortedArray).toEqual([
      "1 apple",
      "2 apple",
      "3 apple",
      "4 apple",
      "11 apple",
    ]);
  });
});
