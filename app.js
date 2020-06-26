// const fs = require("fs");
// code below commented out works in node
// fs.readFile("example-list.txt", (error, data) => {
//   if (error) {
//     console.log("READ FILE ERROR: ", error);
//   }
//   console.log(data.toString());
// });

const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", (event) => {
  console.log(event.target.files);
  const file = event.target.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    // file content in reader.result if successful
    // separate the result by newline and store them in an array
    const fileContent = [...reader.result.split("\n")];
    console.log(fileContent);
  };
  // reader error if read fail
  reader.onerror = () => {
    console.log("Error Reading File Content: ", reader.error);
  };
});
