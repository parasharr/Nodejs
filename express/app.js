const express = require("express")

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.send("This is home page of my first express app")
});
app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app")
});


app.listen(port, ()=> {
    console.log(`The app started successfully on port ${port}`);
    
})