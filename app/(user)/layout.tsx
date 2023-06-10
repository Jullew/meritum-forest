import Header from "@/components/layout/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Meritum Forest - pielęgnacja drzew, krzewów i ogrodów oraz wycinka drzew.",
  description:
    "Meritum Forest, firma, której początki sięgają 2015 roku. Specjalizujemy się w pielęgnacji drzew, krzewów i ogrodów oraz wycince drzew.",
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
      </body>
    </html>
  );
}
