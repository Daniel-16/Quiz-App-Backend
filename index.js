const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/Quiz.routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());

//Middleware
app.use("/api", router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`Server started at PORT ${process.env.PORT || 6000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
