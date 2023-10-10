import { APP_NAME } from '@/lib/constants'
import './globals.css'
import type { Metadata } from 'next'
import { Children } from '@/types'


export const metadata: Metadata = {
  title: `Home | ${APP_NAME}`,
  description: `From the gospel artist ${APP_NAME} comes a heartfelt guide full of spirit, music, and faith `,
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className="">
        
        {children}
      </body>
    </html>
  )
}
