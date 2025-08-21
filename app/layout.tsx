import type { Metadata } from "next";
import { Noto_Serif_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Serif_Display({
  variable: "--font-noto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Go Parlour",
  description: "A Go Parlour app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
