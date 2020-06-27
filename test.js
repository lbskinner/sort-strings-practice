const sortStringsInArray = require("./sort");

describe("sortStringsInArray", () => {
  it("sorts strings contain numbers from smallest to biggest based on the numbers", () => {
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

  it("sorts strings contain numbers first from smallest to biggest based on the number then alphabetically for strings don't contain numbers", () => {
    const sortedArray = sortStringsInArray([
      "11 apple",
      "orange",
      "banana",
      "pineapple",
      "3 apple",
      "1 apple",
    ]);
    expect(sortedArray).toEqual([
      "1 apple",
      "3 apple",
      "11 apple",
      "banana",
      "orange",
      "pineapple",
    ]);
  });

  it("sorts strings contain number first from smallest to biggest based on the number then alphabetically for the rest of the strings", () => {
    const sortedArray = sortStringsInArray([
      "secretary",
      "activity",
      "supermarket",
      "11 apple",
      "2 orange",
      "1 banana",
      "2 pineapple",
      "1 watermelon",
    ]);
    expect(sortedArray).toEqual([
      "1 banana",
      "1 watermelon",
      "2 orange",
      "2 pineapple",
      "11 apple",
      "activity",
      "secretary",
      "supermarket",
    ]);
  });
});
