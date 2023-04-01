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
    type: Number,
    required: true,
  },
  timeLimit: {
    type: Number,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
