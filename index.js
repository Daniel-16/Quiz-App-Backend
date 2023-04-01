const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/Quiz.routes");

app.use(cors());
app.use(express.json());

//Middleware
app.use("/api", router);

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz-app")
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`Server started at PORT ${process.env.PORT || 6000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
