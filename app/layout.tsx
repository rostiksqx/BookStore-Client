import "./globals.css";

import Link from "next/link";
import Header from "../components/Header";

const items = [
  { key: "home", label: <Link href="/">Home</Link> },
  { key: "books", label: <Link href="/books">Books</Link> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
