//? dependencies

const express = require("express");

//? constants
const app = express();

//? constants

const port=process.env.PORT || 3000

//?routing

app.get("/", (req,res) => {
    res.send("welcome to weather house");
})

app.get("/about", (req,res) => {
    res.send("welcome to about page");
})

app.get("/weather", (req,res) => {
    res.send("welcome to weather page");
})

app.get("*", (req,res) => {
    res.send("page not found");
})




//? listening server
app.listen(port, () => {
    console.log("listening at ", port);
})