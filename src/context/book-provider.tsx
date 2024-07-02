"use client";

import { getAllBooks } from "@/api/books";
import { getAllCategories } from "@/api/categories";
import { BookContextType } from "@/types";
import React from "react";


export const BookContext = React.createContext<BookContextType>({ books: [], setBooks: () => { }, categories: [], setCategories: () => { }, loading: false });


export default function BookProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [books, setBooks] = React.useState<BookContextType["books"]>([]);
    const [categories, setCategories] = React.useState<BookContextType["categories"]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        getAllBooks().then((data) => {
            setBooks(data);
        });

        getAllCategories().then((data) => {
            setCategories(data);
        });
        setLoading(false);
    }, []);

    return (
        <BookContext.Provider value={{ books, setBooks, categories, setCategories, loading }}>
            {children}
        </BookContext.Provider>
    );
}

export function useBooks() {
    return React.useContext(BookContext);
}