import type { Metadata } from "next";
import { Instrument_Serif, Carattere, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/bubble";
import Footer from "@/components/Footer";
import Image from "next/image"; // Added for the custom icon
import { XIcon } from "lucide-react"; // Added for the close icon

const instrument = Instrument_Serif({
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
  // We are removing the viewport from here to add it directly to the HTML
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Manually inserting the viewport meta tag for better mobile browser compatibility */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${lexend.className} ${instrument.variable}  ${carattere.variable} antialiased relative scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ===== START: NEW BANNER ADDED HERE ===== */}
          <div className="bg-gray-800 text-white flex items-center justify-center p-2 text-sm relative">
            <Image
              src="/makeupp.png" // IMPORTANT: Change this to your icon's path!
              alt="Go Parlour Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            <span>Go Parlour</span>
            <button className="absolute right-4" aria-label="Close banner">
              <XIcon className="h-4 w-4" />
            </button>
          </div>
          {/* ===== END: NEW BANNER ===== */}

          {/* <BubbleBackground
            interactive
            className="fixed inset-0  flex  pointer-events-auto items-center justify-center rounded-xl"
          /> */}
          <div className="relative flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
