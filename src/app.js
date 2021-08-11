//? dependencies

const express = require("express");
const path = require("path");

//? constants
const app = express();
const staticPath=path.join(__dirname,"../public")

//? constants

const port=process.env.PORT || 3000

//? serving static page

app.use(express.static(staticPath))

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