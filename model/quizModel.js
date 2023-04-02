const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: false,
  },
});
const QuizSchema = new mongoose.Schema({
  quizname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  questAns: QuestionSchema,
});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
