//? dependencies

const express = require("express");
const path = require("path");
const hbs=require('hbs')

//? constants
const app = express();
const staticPath = path.join(__dirname, "../public");
const componentPath = path.join(__dirname, "../templates/components");

//? constants

const port = process.env.PORT || 3000;
const templatePaths = path.join(__dirname, "../templates/views");

//? setting partials

hbs.registerPartials(componentPath)

//? using template engine

app.set("view engine", "hbs");
app.set("views", templatePaths);

//? serving static page

app.use(express.static(staticPath))

//?routing

app.get("/", (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("*", (req,res) => {
    res.render("404");
})




//? listening server
app.listen(port, () => {
    console.log("listening at ", port);
})