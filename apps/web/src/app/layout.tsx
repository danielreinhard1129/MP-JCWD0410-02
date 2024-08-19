import type { Metadata } from "next";
import "./globals.css";
import { poppins, mochiyPopOne } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";

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
        <div className="flex flex-col selection:bg-[#d80072] selection:font-bold selection:text-white">
        <NextAuthProvider>
          <Navbar /> 
          <main className="flex-grow">{children}</main>
          <Footer />
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
