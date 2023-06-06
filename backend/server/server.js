// import connectToMongo from "./db.js";
const express = require("express");
const cors = require('cors')
const mongoURI = "mongodb://localhost:27017/testing"
const mongoose = require('mongoose')
const Router = require ("./routes/Router.js")
const connectToMongo = ()=>{
    mongoose
    .connect(mongoURI)
    .then( console.log("connected"))
    .catch (error => console.log(error));
}
connectToMongo();
const app = express()

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.use(cors())
app.use(express.json())
app.use('/', Router)


app.listen((process.env.PORT || 3000), () => {
  console.log(`iNotebook backend listening at http://localhost:${3000}`)
})