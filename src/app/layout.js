// import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import Footer from '@/Components/Footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoBin - HomePage',
  description: 'A smart waste management solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
