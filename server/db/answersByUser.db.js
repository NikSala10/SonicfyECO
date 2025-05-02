let answers = []; 

const saveAnswer = async (answerData) => {
  answers.push({
    ...answerData,
  });
};

const getAllAnswers = async () => {
  return answers;
};

const clearAnswers = async () => {
    answers = [];
  };

module.exports = {
  saveAnswer,
  getAllAnswers,
  clearAnswers,
};