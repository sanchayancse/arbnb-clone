import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/navbar';
import './globals.css'
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Arbnb 🏠',
  description: 'Arbnb Clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
        <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
