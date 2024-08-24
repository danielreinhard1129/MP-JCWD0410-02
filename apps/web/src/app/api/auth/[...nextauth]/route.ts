import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;


// import NextAuth from "next-auth";

// export default NextAuth({
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.role = user.role;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             session.user.role = token.role;
//             return session;
//         },
//     },

// });