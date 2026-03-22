import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Africa-Freelance | Dashboard',
  description: 'Africa-Freelance Platform Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
