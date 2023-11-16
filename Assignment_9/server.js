const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require("body-parser");
const routes = require("./api/routes/route");
const port = 800;


mongoose.connect("mongodb://localhost:27017/Assignment8", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log("Error with connection", error);
    });
  
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);
app.listen(port, () => {
    console.log(`App started at port  ${port}`);
});