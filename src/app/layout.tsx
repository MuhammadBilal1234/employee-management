import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Employee Managment",
  description: "Manage employees Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <nav className=" py-5">
          <main className="container flex space-x-5 text-xl">
            <Link href="/add-employee">New Employee</Link>
            <Link href="/edit-employee/id">Edit Employee</Link>
            <Link href="/view-employee">View Employee</Link>
          </main>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
