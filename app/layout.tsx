
import type { Metadata } from "next";
import "./globals.css";
import NavENJP from "./jp/component/navbar/navENJP";
import FooterENJP from "./jp/component/footer/footerENJP";

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
        <NavENJP />
        {children}
        <FooterENJP />
      </body>
    </html>
  );
}
