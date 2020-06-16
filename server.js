const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes/js"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workoutdb";

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

mongoose.connect(MONGODB_URI, options);

app.listen(PORT, () => {
    console.log("App running on port http://localhost:${PORT}");
});