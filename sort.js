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

// separate the compared items into two arrays by " "
// const lastStringArray = [...lastString.split(" ")];
// const nextStringArray = [...nextString.split(" ")];

//   // both first items in the arrays are not numbers (cannot be converted to numbers), ex. apples or 2oranges
//   if (
//     isNaN(parseInt(lastStringArray[0])) &&
//     isNaN(parseInt(nextStringArray[0]))
//   ) {
//     // and both first items are the same when all converted to lowercase
//     if (
//       lastStringArray[0].toLowerCase() === nextStringArray[0].toLowerCase()
//     ) {
//       // if the original first item in A lower case, return -1, if not return 1
//       return lastStringArray[0] === lastStringArray[0].toLowerCase() ? -1 : 1;
//     } else {
//       // sort them alphabetically regardless of letter cases
//       return lastStringArray[0].toLowerCase() >
//         nextStringArray[0].toLowerCase()
//         ? 1
//         : -1;
//     }
//   }
//   // first item in lastStringArray(A) is not a number and first item in nextStringArray(B) is a number
//   else if (
//     isNaN(parseInt(lastStringArray[0])) &&
//     parseInt(nextStringArray[0]) !== NaN
//   ) {
//     return 1; // next(B) comes before last(A)
//   }
//   // first item in lastStringArray(A) is a number and first item in nextStringArray(B) is not a number
//   else if (
//     parseInt(lastStringArray[0]) !== NaN &&
//     isNaN(parseInt(nextStringArray[0]))
//   ) {
//     return -1; // last(A) comes before next(B)
//   }
//   // both first items in the arrays are numbers
//   else if (
//     parseInt(lastStringArray[0]) !== NaN &&
//     parseInt(nextStringArray[0]) !== NaN
//   ) {
//     // and both first items in the arrays are the same numbers
//     if (parseInt(lastStringArray[0]) === parseInt(nextStringArray[0])) {
//       // when lastStringArray(A) only include one item, ex. 2Apple and B includes more than one items
//       if (lastStringArray.length === 0 && nextStringArray.length > 0) {
//         const lastStringWord = lastStringArray[0].replace(regexNum, "");
//         if (
//           lastStringWord.toLowerCase() === nextStringArray[1].toLowerCase()
//         ) {
//           // if the word part of A is the same when compared to it's lowercase version
//           return lastStringWord === lastStringWord.toLowerCase()
//             ? -1 // means that the origin item is lower cased, return -1
//             : 1; // if not, means the original item is upper cased, return 1
//         } else {
//           // sort the rest of the strings alphabetically
//           return lastStringWord.toLowerCase() >
//             nextStringArray[1].toLowerCase()
//             ? 1
//             : -1;
//         }
//       }

//       // when lastStringArray(A) only include more than one items and B includes only one items,  ex. 2Apple
//       else if (lastStringArray.length > 0 && nextStringArray.length === 0) {
//         const nextStringWord = nextStringArray[0].replace(regexNum, "");
//         if (
//           lastStringArray[1].toLowerCase() === nextStringWord.toLowerCase()
//         ) {
//           // if the word part of A is the same when compared to it's lowercase version
//           return lastStringArray[1] === lastStringArray[1].toLowerCase()
//             ? -1 // means that the origin item is lower cased, return -1
//             : 1; // if not, means the original item is upper cased, return 1
//         } else {
//           // sort the rest of the strings alphabetically
//           return lastStringArray[1].toLowerCase() >
//             nextStringWord.toLowerCase()
//             ? 1
//             : -1;
//         }
//       }

//       // when both arrays only include one items,  ex. 2Apple
//       else if (lastStringArray.length === 0 && nextStringArray.length === 0) {
//         const lastStringWord = lastStringArray[0].replace(regexNum, "");
//         const nextStringWord = nextStringArray[0].replace(regexNum, "");
//         if (lastStringWord.toLowerCase() === nextStringWord.toLowerCase()) {
//           // if the word part of A is the same when compared to it's lowercase version
//           return lastStringWord === lastStringWord.toLowerCase()
//             ? -1 // means that the origin item is lower cased, return -1
//             : 1; // if not, means the original item is upper cased, return 1
//         } else {
//           // sort the rest of the strings alphabetically
//           return lastStringWord.toLowerCase() > lastStringWord.toLowerCase()
//             ? 1
//             : -1;
//         }
//       } else if (lastStringArray.length > 0 && nextStringArray.length > 0) {
//         // both the second items in the arrays are the same when converted to lower case
//         if (
//           lastStringArray[1].toLowerCase() ===
//           nextStringArray[1].toLowerCase()
//         ) {
//           // if second item of A is the same when compared to it's lowercase version
//           return lastStringArray[1] === lastStringArray[1].toLowerCase()
//             ? -1 // means that the origin item is lower cased, return -1
//             : 1; // if not, means the original item is upper cased, return 1
//         } else {
//           // sort the rest of the strings alphabetically
//           return lastStringArray[1].toLowerCase() >
//             nextStringArray[1].toLowerCase()
//             ? 1
//             : -1;
//         }
//       }
//     } else {
//       // sort the two numbers smallest to biggest
//       return parseInt(lastStringArray[0]) > parseInt(nextStringArray[0])
//         ? 1
//         : -1;
//     }
//   }
// });

module.exports = sortStringsInArray;
