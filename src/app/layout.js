// import { Inter } from 'next/font/google'
import Navbar from "../Components/Navbar/Navbar";
import "./globals.css";
import Footer from "../Components/Footer/Footer";
import { getServerSession } from "next-auth";
import SessionProvider, { SessionOptions } from "../Components/SessionProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoBin - HomePage",
  description: "A smart waste management solution",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar></Navbar>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
