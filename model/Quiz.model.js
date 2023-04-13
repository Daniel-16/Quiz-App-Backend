const mongoose = require("mongoose");
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
    type: String,
    required: true,
  },
  timeLimit: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
