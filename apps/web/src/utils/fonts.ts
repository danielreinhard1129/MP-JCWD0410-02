import { Mochiy_Pop_One, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const mochiyPopOne = Mochiy_Pop_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mochiy",
  weight: ["400"],
});
