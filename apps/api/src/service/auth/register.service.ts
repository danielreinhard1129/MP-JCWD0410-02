import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User, Role, Provider, Prisma } from '@prisma/client';
import { nanoid } from 'nanoid';
import { transporter } from '@/lib/nodemailer';

type RegisterBody = {
  name: string;
  email: string;
  password?: null;
  role: 'BUYER' | 'EVENT_ORGANIZER';
  referralCode?: string;
  provider?: Provider;
};

export const registerService = async (body: RegisterBody) => {
  try {
    const { name, email, password, role, referralCode, provider = Provider.CREDENTIALS } = body;
    
    if (provider === Provider.CREDENTIALS && !password) {
      throw new Error('Password is required for credentials signup');
    }
    
    const normalizedRole = role.toUpperCase() as Role;
    if (normalizedRole !== Role.BUYER && normalizedRole !== Role.EVENT_ORGANIZER) {
      throw new Error('Invalid role');
    }
    
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      throw new Error('Email already exists');
    }
    
    const hashedPassword = password ? await hashPassword(password) : null;
    
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        referralCode: nanoid(10),
        role: normalizedRole,
        provider,
      },
    });
    
    console.log(`New user created with ID: ${newUser.id}`);
    
    if (referralCode) {
      await handleReferral(newUser.id, referralCode);
    }
    
    return newUser;
  } catch (error) {
    console.error('Error in registerService:', error);
    throw error;
  }
};

const handleReferral = async (userId: number, referralCode: string) => {
  try {
    console.log(`Handling referral for user ${userId} with code ${referralCode}`);
    
    const referrer = await prisma.user.findUnique({
      where: { referralCode },
    });
    
    if (referrer) {
      console.log(`Found referrer with ID ${referrer.id}`);
      
      // Credit points to referrer
      const updatedReferrer = await prisma.user.update({
        where: { id: referrer.id },
        data: { points: { increment: 10000 } },
      });
      console.log(`Updated referrer points. New total: ${updatedReferrer.points}`);
      
      const couponCode = nanoid(10);
      const newCoupon = await prisma.coupon.create({
        data: {
          code: couponCode,
          userId: userId,
          discount: 10,
          expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 3 months
        },
      });
      console.log(`Created new coupon with code ${newCoupon.code} for user ${userId}`);
    } else {
      console.log(`No referrer found for code ${referralCode}`);
    }
  } catch (error) {
    console.error('Error in handleReferral:', error);
    throw error;
  }
};

const handleExpiredPoints = async () => {
  try {
    const now = new Date();
    const expiredUsers = await prisma.user.findMany({
      where: {
        points: { gt: 0 },
        updatedAt: { lte: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000) }, // 3 months ago
      },
    });
    
    console.log(`Found ${expiredUsers.length} users with expired points`);
    
    for (const user of expiredUsers) {
      await prisma.user.update({
        where: { id: user.id },
        data: { points: 0 },
      });
      
      await transporter.sendMail({
        to: user.email,
        subject: 'Your points have expired',
        html: `Your ${user.points} points have expired. Please visit our website to earn more points.`
      });
      
      console.log(`Reset points and sent email to user ${user.id}`);
    }
  } catch (error) {
    console.error('Error in handleExpiredPoints:', error);
    throw error;
  }
};

const createVoucher = async (eventId: number, discount: number, expirationDate: Date) => {
  try {
    const voucherCode = nanoid(10);
    const voucher = await prisma.voucher.create({
      data: {
        code: voucherCode,
        discount,
        eventId,
        expiresAt: expirationDate,
      },
    });
    
    console.log(`Created voucher with code ${voucher.code} for event ${eventId}`);
    
    return voucher;
  } catch (error) {
    console.error('Error in createVoucher:', error);
    throw error;
  }
};