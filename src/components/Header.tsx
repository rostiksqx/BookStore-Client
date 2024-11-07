import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
      <Link href="/" className="flex items-center justify-center">
        <BookIcon className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-semibold">Bookstore</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/books"
          className="text-base font-medium underline-animation"
          prefetch={false}
        >
          Books
        </Link>
        <Link
          href="/about"
          className="text-base font-medium underline-animation"
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className="text-base font-medium underline-animation"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
