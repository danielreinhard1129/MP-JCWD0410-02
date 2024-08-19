import { config } from '../config';

import { gmailAppPassword, gmailEmail } from '../config';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailAppPassword,
  },
});
