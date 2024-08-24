// import { nanoid } from 'nanoid';
// import prisma from '../../prisma';

// export const handleReferral = async (userId: number, referralCode: string) => {
//   try {
//     const referrer = await prisma.referral.findUnique({
//       where: { referralCode },
//     });
//     if (referrer) {
//       await prisma.user.update({
//         where: { id: referrer.userId },
//         data: {
//           points: {
//             increment: 10000,
//           },
//         },
//       });
//       const couponCode = nanoid(10);
//       await prisma.coupon.create({
//         data: {
//           code: couponCode,
//           userId: userId,
//           discount: 10,
//           expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 3 months
//         },
//       });
//     }
//     await prisma.referral.create({
//       data: {
//         userId,
//         referralCode,
//       },
//     });
//   } catch (error) {
//     throw error;
//   }
// };


// //nanti buat jdi satu dg register.service.

