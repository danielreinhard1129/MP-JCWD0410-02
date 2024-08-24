
// import prisma from '../../prisma';
// import { transporter } from '../../lib/nodemailer';

// export const handleExpiredPoints = async () => {
//   try {
//     const now = new Date();
//     const expirationDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000); // 3 months ago
//     const users = await prisma.user.findMany({
//       where: {
//         points: {
//           gt: 0,
//         },
//         updatedAt: {
//           lte: expirationDate,
//         },
//       },
//     });
//     for (const user of users) {
//       await prisma.user.update({
//         where: { id: user.id },
//         data: {
//           points: 0,
//         },
//       });
//       await transporter.sendMail({
//         to: user.email,
//         subject: 'Your Voint Expired Dates',
//         html: `Your points have expired. Please visit our website to earn more points.`,
//       });
//     }
//   } catch (error) {
//     throw error;
//   }
// };