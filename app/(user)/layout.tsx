import Header from "@/components/layout/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meritum Forest - wycinka drzew, pielęgnacja zieleni i ogrodów",
  description:
    "Specjalizujemy się w wycince drzew, pielęgnacji drzew, krzewów oraz ogrodów. Działamy w Myszkowie, Katowicach, Sosnowcu, Będzinie i całym województwie śląskim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Header item />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
