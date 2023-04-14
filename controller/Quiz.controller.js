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

exports.getAllQuizzes = async (req, res) => {
  try {
    const quiz = await QuizSchema.find({});
    res.status(201).json({
      success: true,
      quiz,
    });
  } catch (err) {
    res.status(501).json({
      success: false,
      error: err.message,
    });
  }
};

exports.editQuiz = async (req, res) => {
  const { id } = req.params;
  const { quizname, description, points, timeLimit } = req.body;
  try {
    const editQuiz = await QuizSchema.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          quizname,
          description,
          points,
          timeLimit,
        },
      }
    );
    res.status(201).json({
      success: true,
      editQuiz,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getSingleQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await QuizSchema.findOne({ _id: id });
    res.status(201).json({
      success: true,
      quiz,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};
