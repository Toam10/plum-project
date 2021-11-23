const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/NBA", {});
const app = express();
const api = require("./api");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

const PORT = 8080;

app.use("/", api);

app.listen(PORT, () => console.log("server is up and runing on " + PORT));
