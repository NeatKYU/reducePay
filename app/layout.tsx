import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import AuthProvider from '@/providers/authProvider'
import { cn } from '@/lib/utils'

import './globals.css'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'px-3 pt-3 pb-16 md:p-3 w-screen min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
