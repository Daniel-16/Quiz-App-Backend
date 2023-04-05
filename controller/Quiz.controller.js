const QuizSchema = require("../model/Quiz.model");
const QuestionSchema = require("../model/Questions.model");

exports.createQuiz = async (req, res) => {
  const { quizname, description, points, timeLimit } = req.body;
  try {
    const quiz = await QuizSchema.create({
      quizname,
      description,
      points,
      timeLimit,
    });
    const questions = await QuestionSchema.create({
      quizID: quiz._id,
      questions: [],
    });
    res.status(201).json({
      quiz,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await QuizSchema.findOneAndDelete({ _id: id });
    const questions = await QuestionSchema.findOneAndDelete({ quizID: id });
    res.status(201).json({
      success: true,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};
