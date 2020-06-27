function sortStringsInArray(someArray) {
  const sortedArray = someArray.sort((lastString, nextString) => {
    const lastStringArray = [...lastString.split(" ")];
    console.log(lastStringArray);
    console.log(isNaN(parseFloat(lastStringArray[0])));

    const nextStringArray = [...nextString.split(" ")];
    console.log(nextStringArray);
    console.log(parseFloat(nextStringArray[0]));

    if (
      isNaN(parseFloat(lastStringArray[0])) &&
      isNaN(parseFloat(nextStringArray[0]))
    ) {
      return lastStringArray[0] > nextStringArray[0] ? 1 : -1;
    } else if (isNaN(parseFloat(lastStringArray[0]))) {
      return 1;
    } else if (isNaN(parseFloat(nextStringArray[0]))) {
      return -1;
    } else {
      return parseFloat(lastStringArray[0]) > parseFloat(nextStringArray[0])
        ? 1
        : -1;
    }
  });
  console.log(sortedArray);

  return sortedArray;
}

module.exports = sortStringsInArray;
