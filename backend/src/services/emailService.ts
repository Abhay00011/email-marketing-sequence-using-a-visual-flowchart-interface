import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!
  }
});

const sendEmail = async (to: string, subject: string, text: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  });

  console.log(`Email sent to ${to}`);
};

export default sendEmail;
