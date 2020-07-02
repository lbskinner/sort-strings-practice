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

  it("sorts strings contain numbers first from smallest to biggest based on the number then alphabetically for the rest of the strings", () => {
    const sortedArray = sortStringsInArray([
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
    ]);
  });

  it("sorts strings contain numbers first from smallest to biggest based on the number then alphabetically for the rest of the strings regardless of cases", () => {
    const sortedArray = sortStringsInArray([
      "11 Apple",
      "2 Orange",
      "1 Banana",
      "11 apple",
      "2 orange",
      "1 banana",
      "2 pineapple",
      "1 watermelon",
      "1 Watermelon",
      "2 Pineapple",
    ]);
    expect(sortedArray).toEqual([
      "1 banana",
      "1 Banana",
      "1 watermelon",
      "1 Watermelon",
      "2 orange",
      "2 Orange",
      "2 pineapple",
      "2 Pineapple",
      "11 apple",
      "11 Apple",
    ]);
  });

  it("sorts strings contain numbers first from smallest to biggest based on the number then alphabetically strings don't contain numbers regardless of cases", () => {
    const sortedArray = sortStringsInArray([
      "Apple",
      "Orange",
      "watermelon",
      "orange",
      "pineapple",
      "apple",
      "Watermelon",
      "Pineapple",
    ]);
    expect(sortedArray).toEqual([
      "apple",
      "Apple",
      "orange",
      "Orange",
      "pineapple",
      "Pineapple",
      "watermelon",
      "Watermelon",
    ]);
  });

  it("sorts strings contain numbers from smallest to biggest based on the numbers then alphabetically for the rest of the strings (no spaces in between)", () => {
    const sortedArray = sortStringsInArray([
      "5Apple",
      "2 Orange",
      "1 watermelon",
      "5 orange",
    ]);
    expect(sortedArray).toEqual([
      "1 watermelon",
      "2 Orange",
      "5Apple",
      "5 orange",
    ]);
  });

  it("sorts everything from example file", () => {
    const sortedArray = sortStringsInArray([
      "2 Steaks",
      "10 Chicken Wings",
      "867 Ship’s company",
      "343GuiltySparks",
      "initiative",
      "867 Sheep",
      "television",
      "849 car loan",
      "867 ship’s company",
      "Teal",
      "864 self-sacrifice",
      "Television",
      "330 kangaroo’s-foot",
      "907 international law enforcement agency",
    ]);
    expect(sortedArray).toEqual([
      "2 Steaks",
      "10 Chicken Wings",
      "330 kangaroo’s-foot",
      "343GuiltySparks",
      "849 car loan",
      "864 self-sacrifice",
      "867 Sheep",
      "867 ship’s company",
      "867 Ship’s company",
      "907 international law enforcement agency",
      "initiative",
      "Teal",
      "television",
      "Television",
    ]);
  });
});
