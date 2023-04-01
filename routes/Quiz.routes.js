const express = require("express");
const {
  createQuiz,
  createQuestions,
} = require("../controller/Quiz.controller");
const router = express.Router();

router.post("/", createQuiz);
router.post("/createQuestions", createQuestions);
module.exports = router;
