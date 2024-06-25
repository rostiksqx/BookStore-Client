"use client";

import BookCard from "@/components/BookCard";
import { useBooks } from "../../context/book-provider";


export default function Books() {
    const { books } = useBooks();

    return (
        <div className="container p-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Books</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Browse our entire collection of books across all genres.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-12">
                {books.map((book) => (
                    <BookCard key={book.id} data={book} />
                ))}
            </div>
        </div>
    );
};