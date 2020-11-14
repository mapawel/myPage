import emailjs, { init } from 'emailjs-com';

const USER_KEY = process.env.REACT_APP_API_KEY;
init(USER_KEY);

export const sendMail = async (values, handleSentMailFeedback) => {
  const serviceID = 'service_d7efn07';
  const templateID = 'template_fdk32ox';
  try {
    const send = async () => emailjs.send(
      serviceID,
      templateID,
      {
        name: values.name,
        content: values.content,
        category: values.category,
        mail: values.mail,
      },
    );
    const res = await send();
    handleSentMailFeedback(res.status);
  } catch (err) {
    handleSentMailFeedback(err.status);
    console.log(err)
  }
};
