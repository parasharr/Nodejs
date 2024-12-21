// Synchronous or blocking
// - Line by line executing

// Asynchronous or non-blocking
// - Line by line execution not guaranteed
// - Callback will fire

const fs = require("fs")
fs.readFile("Pranjeet.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is message");