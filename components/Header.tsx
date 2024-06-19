import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Header() {
    return (
        <header className="bg-gray-600 text-white py-4 px-6 md:px-10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                <span className="text-xl font-bold">Book Store</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link href="/books" className="text-lg font-medium p-1 rounded-lg hover:bg-slate-400 transition-colors ease-in-out duration-300" prefetch={false}>
                    Book Shop
                </Link>
                <Link href="/about" className="text-lg font-medium p-1 rounded-lg hover:bg-slate-400 transition-colors ease-in-out duration-300" prefetch={false}>
                    About
                </Link>
                <Link href="/about/#contacts" className="text-lg font-medium p-1 rounded-lg hover:bg-slate-400 transition-colors ease-in-out duration-300" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                <form className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <Input
                        type="search"
                        placeholder="Search books..."
                        className="bg-white text-black pl-10 pr-4 py-2 rounded-md focus:outline-none w-64"
                    />
                </form>
                <Button className="px-4 py-2 rounded-md ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                    >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                </Button>
            </div>
        </header>
    );
};