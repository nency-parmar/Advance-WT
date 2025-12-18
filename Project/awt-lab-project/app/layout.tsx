import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My App",
  description: "Demo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary font-bold mb-4 fs-4">
          <div className="container-md">
            <Link href="/">Home</Link>
          </div>
          <div className="container-md">
            <Link href="/database">Database</Link>
          </div>
          <div className="container-md">
            <Link href="/about">About</Link>
          </div>
          <div className="container-md">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="container-md">
            <Link href="/staff">Staff</Link>
          </div>
          <div className="container-md">
            <Link href="/users">Users</Link>
          </div>
          <div className="container-md">
            <Link href="/login">Login</Link>
          </div>
        </nav>
        {children}
      </body>
    </html >
  );
}
