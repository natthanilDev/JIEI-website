import type { Metadata } from "next";
import Footer from "@/component/footer/footer";
import "./globals.css";
import Navbar from "@/component/navbar/navbar";


export const metadata: Metadata = {
  title: "JIEI(THAILAND).CO.,LTD",
  description: "JIEI(THAILAND).CO.,LTD",
  keywords: "JIEI(THAILAND).CO.,LTD",
  icons: {
    icon: '/logoIcon.png'
  }
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
