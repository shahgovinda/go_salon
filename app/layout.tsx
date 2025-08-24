import type { Metadata } from "next";
import { Instrument_Serif, Carattere, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";

const instrument  = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});
const lexend = Lexend({
  variable: "--lexend",
  subsets: ["latin"],
});
const carattere = Carattere({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: "400", 
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
        className={`${lexend.className} ${instrument.variable}  ${carattere.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
