import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.resolve(__dirname, ".env")});

import { adjectives, nouns } from "./words";
import nodemailer from 'nodemailer';
import sgTransport, { SendgridOptions } from 'nodemailer-sendgrid';

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email: Object) => {
  const options: SendgridOptions = {
      apiKey: process.env.SENDGRID_API_KEY || '',
  };

  const mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(email)
  .then(() => {
    console.log("Message sent");
  })
  .catch((error) => {
    console.log(error.response.body);
  })
};

export const sendSecretMail = (adress: String, secret: String) => {
  const email: Object = {
    from: "ha.dong.lee@ibm.com",
    to: adress,
    subject: "🔐 Login Secret for Yorigram 🔐",
    html: `Hello! Your login secret it <strong>${secret}</strong>.<br/>Copy paste on the app/web site to log in`
  }
  return sendMail(email);
}