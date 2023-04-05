const QuizSchema = require("../model/Quiz.model");
const QuestionSchema = require("../model/Questions.model");

exports.createQuestions = async (req, res) => {
  //Find the Quiz the user would want to create questions on
  const id = req.params.id;
  const quizID = await QuizSchema.findOne({ _id: id });
  const { prompt, options, answers } = req.body;
  try {
    const question = await QuestionSchema.findOneAndUpdate(
      { quizID },
      {
        $push: {
          questions: { prompt, options, answers },
        },
      }
    );
    res.status(201).json({
      question,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteQuestions = async (req, res) => {
  const { id, questionID } = req.params;
  const quizID = await QuizSchema.findOne({ _id: id });
  try {
    const deleteQuestion = await QuestionSchema.findOneAndUpdate(
      { quizID },
      { $pull: { questions: { _id: questionID } } },
      { new: true }
    );
    if (!deleteQuestion) {
      res.status(404).json({
        message: "Question to delete was not found",
      });
    } else {
      res.status(201).json({
        message: "Question has been deleted successfully",
        deleteQuestion,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.editQuestions = async (req, res) => {
  const { id, questionID } = req.params;
  const { prompt, options, answers } = req.body;
  const quizID = await QuizSchema.findOne({ _id: id });
  try {
    const question = await QuestionSchema.findOneAndUpdate(
      { quizID, "questions._id": questionID },
      {
        $set: {
          "questions.$.prompt": prompt,
          "questions.$.options": options,
          "questions.$.answers": answers,
        },
      },
      { new: true }
    );
    if (!question) {
      res.status(404).json({
        message: "Question was not found",
      });
    }
    res.status(201).json({
      success: true,
      question,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAllQuestions = async (req, res) => {
  const { id } = req.params;
  const quizID = await QuizSchema.findOne({ _id: id });
  try {
    const questions = await QuestionSchema.find({ quizID });
    // if (questions.length >= 1) {
    //   res.status(201).json({
    //     success: true,
    //     questions,
    //   });
    // } else {
    //   res.status(201).json({
    //     success: true,
    //     message: "No questions were created",
    //   });
    // }
    res.status(201).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
