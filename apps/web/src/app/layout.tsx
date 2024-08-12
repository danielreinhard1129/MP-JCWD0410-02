import type { Metadata } from "next";
import "./globals.css";
import { poppins, mochiyPopOne } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
