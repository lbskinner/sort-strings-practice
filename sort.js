function sortStringsInArray(someArray) {
  const sortedArray = someArray.sort((lastString, nextString) => {
    // separate the compared items into two arrays by " "
    const lastStringArray = [...lastString.split(" ")];
    const nextStringArray = [...nextString.split(" ")];
    // both first items in the arrays are not numbers (can not be converted to numbers)
    if (
      isNaN(parseInt(lastStringArray[0])) &&
      isNaN(parseInt(nextStringArray[0]))
    ) {
      // sort them alphabetically
      return lastStringArray[0] > nextStringArray[0] ? 1 : -1;
    }
    // first item in lastStringArray(A) is not a number and first item in nextStringArray(B) is a number
    else if (
      isNaN(parseInt(lastStringArray[0])) &&
      !isNaN(parseInt(nextStringArray[0]))
    ) {
      return 1; // next(B) comes before last(A)
    }
    // first item in lastStringArray(A) is a number and first item in nextStringArray(B) is not a number
    else if (
      !isNaN(parseInt(lastStringArray[0])) &&
      isNaN(parseInt(nextStringArray[0]))
    ) {
      return -1; // last(A) comes before next(B)
    }
    // both first items in the arrays are numbers
    else if (
      !isNaN(parseInt(lastStringArray[0])) &&
      !isNaN(parseInt(nextStringArray[0]))
    ) {
      // and both first items in the arrays are the same numbers
      if (parseInt(lastStringArray[0]) === parseInt(nextStringArray[0])) {
        // sort the rest of the strings alphabetically
        return lastStringArray[1] > nextStringArray[1] ? 1 : -1;
      } else {
        // sort the two numbers smallest to biggest
        return parseInt(lastStringArray[0]) > parseInt(nextStringArray[0])
          ? 1
          : -1;
      }
    }
  });
  console.log(sortedArray);
  return sortedArray;
}

module.exports = sortStringsInArray;
