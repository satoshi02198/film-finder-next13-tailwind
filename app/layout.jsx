import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
