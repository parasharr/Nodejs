const fs = require("fs");
let text = fs.readFileSync("firstnode.js", "utf-8"); // Read the external files
text = text.replace("hello", "Pranjeet"); // we can replace anything into the file

console.log(text)

fs.writeFileSync("Pranjeet.txt", text) // after replacing we can use write method to implement it
console.log("Creating a new file...")                                                                                                                                 