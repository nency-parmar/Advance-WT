'use client'

import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'  // Keep but override below
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className="text-dark"
        style={{
          minHeight: '100vh',
          backgroundColor: 'white !important',
          backgroundImage: 'none !important',
          background: 'white !important'
        }}
      >
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'white !important' }}>
          <Navbar />

          <main
            className="flex-grow-1 py-4 py-md-5"
            style={{
              backgroundColor: 'white !important',
              minHeight: '100vh'
            }}
          >
            <div
              className="container"
              style={{
                maxWidth: '1140px',
                backgroundColor: 'white !important',
                minHeight: '100%'
              }}
            >
              {/* No extra divs or overlays - pure white */}
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
