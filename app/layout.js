import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Spotify - Clone",
  description: "Created by Pandji Iman Syach Putra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex relative`}>
        <Sidebar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
