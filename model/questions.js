const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  questions: {
    type: Array,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
