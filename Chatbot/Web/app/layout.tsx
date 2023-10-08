import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'

const font = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'IBM Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body className={cn(font.className,
        "bg-[#fff] dark:bg-gray-800")
        }>
          <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
