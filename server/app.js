const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

require("dotenv").config();
const DATABASE_ID = process.env.DATABASE_ID;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const PORT = process.env.PORT;

const MongoDB_URI = `mongodb+srv://${DATABASE_ID}:${DATABASE_PASSWORD}@cluster0.xupmv.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MongoDB_URI)
  .then((result) => {
    app.listen(PORT || 4000);
  })
  .catch((err) => console.error(err));
