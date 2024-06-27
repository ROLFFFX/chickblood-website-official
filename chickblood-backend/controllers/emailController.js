// controllers/emailController.js
import { sendEmail } from "../services/emailService.js";

const sendEmailController = async (req, res) => {
  const { eName, eEmail, eTitle, eMessage } = req.body;

  try {
    const info = await sendEmail(eName, eEmail, eTitle, eMessage);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};

export { sendEmailController };
