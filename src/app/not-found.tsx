import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <div className="flex-1 flex items-center justify-center">
                <section className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                        <p className="text-muted-foreground">The page you're looking for doesn't exist or in development</p>
                        <Link
                            href="/"
                            className="bg-black text-white inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors duration-300 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Go to Home
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}