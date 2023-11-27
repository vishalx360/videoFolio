import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'videofolio (alpha)',
  description: 'Generate dynamic video resumes from your PDF resume.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative pt-10")}>
        <nav className='fixed z-50 top-0 left-0 font-medium bg-black p-4 text-center w-full text-white'>
          videofolio (alpha)
        </nav>
        {children}
        <footer className=' bg-gray-800 p-2 text-center w-full text-white'>
          All rights reserved &copy; 2023
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
