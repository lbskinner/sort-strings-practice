// const fs = require("fs");

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
    console.log(reader.result);
  };
  reader.onerror = () => {
    console.log(reader.error);
  };
});

// function readFile(file) {

// }
