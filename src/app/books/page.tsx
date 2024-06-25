"use client";

import BookCard from "@/components/BookCard";
import { useBooks } from "../book-provider";


export default function Books() {
    const { books } = useBooks();

    return (
        <>
            {books.map((book) => (
                <BookCard key={book.id} data={book} />
            ))}
        </>
    );
};