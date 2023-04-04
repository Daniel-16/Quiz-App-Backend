const express = require("express");
const {
  createQuiz,
  createQuestions,
  deleteQuestions,
} = require("../controller/Quiz.controller");
const router = express.Router();

router.post("/", createQuiz);
router.post("/createQuestions/:id", createQuestions);
router.delete("/deleteQuestion/:id/:questionID", deleteQuestions);
module.exports = router;
