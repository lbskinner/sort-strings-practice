function sortStringsInArray(someArray) {
  const sortedArray = someArray.sort((lastString, nextString) => {
    // match everything that are not letters
    const regexString = /[^a-zA-Z]/g;

    // both are converted to numbers
    if (!isNaN(parseInt(lastString)) && !isNaN(parseInt(nextString))) {
      // both items are the same numbers
      if (parseInt(lastString) === parseInt(nextString)) {
        // replace everything that are not letter with "", only words left
        lastStringLetters = lastString.replace(regexString, "");
        nextStringLetters = nextString.replace(regexString, "");
        if (
          lastStringLetters.toLowerCase() === nextStringLetters.toLowerCase()
        ) {
          return lastStringLetters === lastStringLetters.toLowerCase() ? -1 : 1;
        } else {
          return lastStringLetters.toLowerCase() >
            nextStringLetters.toLowerCase()
            ? 1
            : -1;
        }
      } else {
        return parseInt(lastString) > parseInt(nextString) ? 1 : -1;
      }
    }
    // if lastString is not a number and nextString is a number
    else if (isNaN(parseInt(lastString)) && !isNaN(parseInt(nextString))) {
      return 1;
    }
    // if lastString is a number and nextSting is not a number
    else if (!isNaN(parseInt(lastString)) && isNaN(parseInt(nextString))) {
      return -1;
    }
    // if both are not numbers
    else if (isNaN(parseInt(lastString)) && isNaN(parseInt(nextString))) {
      if (lastString.toLowerCase() === nextString.toLowerCase()) {
        return lastString === lastString.toLowerCase() ? -1 : 1;
      } else {
        return lastString.toLowerCase() > nextString.toLowerCase() ? 1 : -1;
      }
    }
  });
  console.log(sortedArray);
  return sortedArray;
}

module.exports = sortStringsInArray;
