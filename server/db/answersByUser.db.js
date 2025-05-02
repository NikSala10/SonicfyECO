const answers = []; 

const saveAnswer = async (answerData) => {
  answers.push({
    ...answerData,
  });
};

const getAllAnswers = async () => {
  return answers;
};

module.exports = {
  saveAnswer,
  getAllAnswers,
};