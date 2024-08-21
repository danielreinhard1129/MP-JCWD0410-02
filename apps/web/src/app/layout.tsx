import type { Metadata } from "next";
import "./globals.css";
import { poppins, mochiyPopOne } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Event-Ally | event community",
  description:
    "Event-Ally is a platform for event organizers to create and manage events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${mochiyPopOne.variable}`}>
        <div className="flex min-h-screen flex-col selection:bg-[#d80072] selection:font-bold selection:text-white">
          <NextAuthProvider>
            <SessionProvider>
              <ReactQueryProvider>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </ReactQueryProvider>
            </SessionProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
