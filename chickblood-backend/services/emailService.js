import transporter from "../config/emailConfig.js";

const sendEmail = async (userName, userEmail, emailTitle, emailMessage) => {
  const mailOptions = {
    from: "unitask370@gmail.com",
    to: "1051268839@qq.com",
    subject: "new msg from chickblood contact",
    text: `From: ${userName}\n\n Email: ${userEmail}\n\n Email Title: ${emailTitle}\n\n Email Message: ${emailMessage}`,
  };

  try {
    console.log("Sending email with options:", mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export { sendEmail };
