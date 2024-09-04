import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Westtt",
  description: "Westtt is a Los Angeles-based web design, development and branding studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-4 md:m-8 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
