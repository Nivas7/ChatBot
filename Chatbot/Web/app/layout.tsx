import '@/styles/globals.css'

export const metadata = {
  title: 'Chatbot',
  description: 'IBM project for AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
