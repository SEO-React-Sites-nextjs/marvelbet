import { Inter } from "next/font/google";
import "../../styles/reset.css";
import "../../styles/globals.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import FloatBar from "./components/FloatBar";

import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Marvelbet Online Cricket Exchange: 2026 IPL, RCB Odds & Registration Bonus",
  description:
    "Marvelbet Online Cricket Exchange is the preferred platform for the 2026 IPL. Register now! Access fast bKash payment methods, mobile Marvelbet apps, and lucrative bonuses with promotions.",
  keywords:
    "Marvelbet cricket exchange,2026 IPL online betting, Marvelbet registration steps,Mobile Marvelbet apps,Marvelbet payment methods",
  alternates: {
    canonical: "https://www.marvel365bet.com/",
  },
  openGraph: {
    title:
      "Marvelbet Online Cricket Exchange: 2026 IPL, RCB Odds & Registration Bonus",
    description:
      "Marvelbet Online Cricket Exchange is the preferred platform for the 2026 IPL. Register now! Access fast bKash payment methods, mobile Marvelbet apps, and lucrative bonuses with promotions.",
    locale: "en_BD",
    type: "website",
    url: "/",
    images: [
      {
        url: "/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Marvelbet Online Cricket Exchange: 2026 IPL, RCB Odds & Registration Bonus",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-9JP0GRY20C" />
      <body className={inter.className}>
        <Header />
        <Banner />
        {children}
        <Footer />
        <FloatBar />
      </body>
    </html>
  );
}
