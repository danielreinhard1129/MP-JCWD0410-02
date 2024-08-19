import { JWT_SECRET, } from '@/config';
import { transporter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { sign } from 'jsonwebtoken';

const BASE_URL_FE = 'http://localhost:3000';

export const forgotPasswordService = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password: 'CREDENTIALS',
      },
    });

    if (!user) {
      throw new Error('Invalid email address');
    }

    const token = sign({ id: user.id }, JWT_SECRET!, {
      expiresIn: '25minute',
    });

    const link = `${BASE_URL_FE}/reset-password/${token}`;

    await transporter.sendMail({
      to: email,
      subject: 'Link Reset Password',
      html: `<a href="${link}" target="_blank">Reset Password Here </a>`,
    });

    return {
      message: 'send email success',
    };
  } catch (error) {
    throw error;
  }
};