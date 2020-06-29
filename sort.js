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
      // and both first items are the same when all converted to lowercase
      if (
        lastStringArray[0].toLowerCase() === nextStringArray[0].toLowerCase()
      ) {
        // if the original first item in A lower case, return -1, if not return 1
        return lastStringArray[0] === lastStringArray[0].toLowerCase() ? -1 : 1;
      } else {
        // sort them alphabetically regardless of letter cases
        return lastStringArray[0].toLowerCase() >
          nextStringArray[0].toLowerCase()
          ? 1
          : -1;
      }
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
        // both the second items in the arrays are the same when converted to lower case
        if (
          lastStringArray[1].toLowerCase() === nextStringArray[1].toLowerCase()
        ) {
          // if second item of A is the same when compared to it's lowercase version
          return lastStringArray[1] === lastStringArray[1].toLowerCase()
            ? -1 // means that the origin item is lower cased, return -1
            : 1; // if not, means the original item is upper cased, return 1
        } else {
          // sort the rest of the strings alphabetically
          return lastStringArray[1].toLowerCase() >
            nextStringArray[1].toLowerCase()
            ? 1
            : -1;
        }
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
