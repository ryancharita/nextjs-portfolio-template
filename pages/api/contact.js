/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../Collections/.env` });

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.SENDER,
    to: process.env.TO,
    subject: 'Message From Portfolio Website',
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Phone:</strong> ${req.body.phone}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
