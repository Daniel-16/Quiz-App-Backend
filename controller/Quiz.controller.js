const QuizSchema = require("../model/quizModel");
const QuestionSchema = require("../model/questions");

exports.createQuiz = async (req, res) => {
  const { quizname, description, points, timeLimit } = req.body;
  try {
    const quiz = await QuizSchema.create({
      quizname,
      description,
      points,
      timeLimit,
    });
    res.status(201).json({
      quiz,
    });
  } catch (error) {
    res.status(401).json({
      error,
    });
  }
};

exports.createQuestions = async (req, res) => {
  const { questions, answers } = req.body;
  try {
    const question = await QuestionSchema.create({
      questions,
      answers,
    });
    res.status(201).json({
      question,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};
