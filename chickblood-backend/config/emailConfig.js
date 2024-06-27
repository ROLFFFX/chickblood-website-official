import nodemailer from "nodemailer";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: false,
  auth: {
    user: "unitask370@gmail.com",
    pass: "dxecgnicicrgsosy",
  },
});

export default transporter;
