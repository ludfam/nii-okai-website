import { Children } from "@/types";
import { APP_NAME } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: `About | ${APP_NAME}`,
    description: `From the gospel artist ${APP_NAME} comes a heartfelt guide full of spirit, music, and faith `,
  }

export default function AboutLayout({ children }: Children) {
    return (
        <>
            {children}
        </>
    )
}