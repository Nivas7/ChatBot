import "../styles/globals.css"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from '@/components/Login'

const font = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'IBM Project',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);


  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <SessionProvider session={session}>
        {!session ? (
          <Login />
        ) : (
            <div className="bg-gray-800  w-full h-screen flex flex-col flex-1">
              {children}
            </div>
        )}
      </SessionProvider>
      </body>
    </html>
  )
}
