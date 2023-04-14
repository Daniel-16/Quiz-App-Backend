const express = require("express");
const {
  createQuiz,
  deleteQuiz,
  getAllQuizzes,
  editQuiz,
  getSingleQuiz,
} = require("../controller/Quiz.controller");
const {
  createQuestions,
  deleteQuestions,
  editQuestions,
  getAllQuestions,
} = require("../controller/Questions.controller");
const router = express.Router();

router.post("/", createQuiz);
router.post("/createQuestions/:id", createQuestions);
router.delete("/deleteQuestion/:id/:questionID", deleteQuestions);
router.put("/editQuestion/:id/:questionID", editQuestions);
router.get("/getQuestions/:id", getAllQuestions);
router.delete("/deleteQuiz/:id", deleteQuiz);
router.get("/getQuizzes", getAllQuizzes);
router.put("/editQuiz/:id", editQuiz);
router.get("/getSingleQuiz/:id", getSingleQuiz);
module.exports = router;
