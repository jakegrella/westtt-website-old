import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Westtt",
  description: "Westtt is a Los Angeles-based branding and design studio working with great people, companies, and brands in music and tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-8`}>
        <Header />
        {children}
      </body>
    </html>
  );
};
