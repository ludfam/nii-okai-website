import { APP_NAME } from '@/lib/constants'
import './globals.css'
import type { Metadata } from 'next'
import { Children } from '@/types'
import { Toaster } from '@/components/ui/sonner'


export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `From the gospel artist ${APP_NAME} comes a heartfelt guide full of spirit, music, and faith `,
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <head>

      <script
        type="module"
        defer
        src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/helix.js"
      ></script>
      </head>
      <body className="">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
