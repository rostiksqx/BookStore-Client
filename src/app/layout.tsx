import type { Metadata } from "next";
import { Crimson_Text, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookProvider from "./book-provider";


const crimson_text = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson_text',
  weight: '600'
});

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_serif_display',
  weight: '400'
});

export const metadata: Metadata = {
  title: "Book Store",
  description: "A simple book store created with Next.js and ASP.NET Core",
  icons: "favicon.svg",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={crimson_text.variable + ' ' + dm_serif_display.variable}>
        <BookProvider>
          <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </BookProvider>
      </body>
    </html>
  );
};