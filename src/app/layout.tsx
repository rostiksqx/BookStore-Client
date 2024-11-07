import type { Metadata } from "next";
import { Crimson_Text, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookProvider from "../context/book-provider";

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson_text",
  weight: "600",
});

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_serif_display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Book Store",
  description:
    "A book store where you can find your favorite books and buy them online.",
  robots: "index, follow",
  icons: "favicon.svg",
  openGraph: {
    locale: "en",
    type: "website",
    title: "Book Store",
    description:
      "A book store where you can find your favorite books and buy them online.",
    url: "https://book-store-rostik.netlify.app",
    siteName: "Book Store",
    images: ["https://book-store-rostik.netlify.app/bookstore.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Store",
    description:
      "A book store where you can find your favorite books and buy them online.",
    site: "https://twitter.com/bookstoreshop",
    creator: "https://twitter.com/bookstoreshop",
    images: "https://book-store-rostik.netlify.app/bookstore.webp",
  },
  keywords: [
    "book store",
    "books",
    "buy books",
    "online book store",
    "bookstore",
    "bookshop",
    "bookshop online",
    "bookstore online",
    "buy books online",
    "bookstore near me",
    "bookshop near me",
  ],
  generator: "Book Store",
  metadataBase: new URL("https://book-store-rostik.netlify.app"),
  alternates: { canonical: "./" },
};

function generateSchemaJSONLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Book Store",
    url: "https://book-store-rostik.netlify.app",
    logo: "https://book-store-rostik.netlify.app/favicon.svg",
    description:
      "A book store where you can find your favorite books and buy them online.",
    location: {
      "@type": "VirtualLocation",
      url: "https://book-store-rostik.netlify.app/contact-us",
      description: "Contact us for more information about our book store.",
    },
  };

  return JSON.stringify(schema);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" href="/sitemap-index.xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Book Store" />
        <meta property="og:image:type" content="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchemaJSONLD() }}
        />
      </head>
      <body className={crimson_text.variable + " " + dm_serif_display.variable}>
        <BookProvider>
          <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookProvider>
      </body>
    </html>
  );
}
