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
