const fs = require("fs");
/*
// Blocking, synchronus way
const textIn = fs.readFileSync("txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avacado ${textIn}.\nCreated on the ${Date.now()}`;
fs.writeFileSync("txt/output.txt", textOut);
console.log("File written");
*/
// Non-blocking, non-synchronus way
fs.readFile("txt/start.txt", "utf-8", (err, data1) => {
    fs.readFile(`txt/${data1}.txt`, "utf-8", (err, data2) => {
        console.log(data2);
    })
})
console.log("Will read file...");