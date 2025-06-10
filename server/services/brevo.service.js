require('dotenv').config();
const brevo = require("@getbrevo/brevo"); 

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const sendEmailWithTemplate = async (emailUser, nameUser, artist) => {
    const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.templateId = 1;
  sendSmtpEmail.sender = {
    name: "Spotify",
    email: "yelianibarbosa@gmail.com",
  };
  sendSmtpEmail.to = [
    { email: emailUser, name: nameUser},
  ];
  sendSmtpEmail.replyTo = {
    email: "emailtoreplyto@gmail.com",
    name: "Support",
  };
  sendSmtpEmail.params = { parameter: nameUser, artist: artist };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendEmailWithTemplate };