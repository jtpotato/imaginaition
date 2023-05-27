import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Imaginaition',
  description: 'The product suite for creatives.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
