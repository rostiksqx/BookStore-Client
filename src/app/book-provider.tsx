"use client";

import { BookContextType } from "@/types";
import React from "react";


export const BookContext = React.createContext<BookContextType>({ books: [], setBooks: () => { } });


export default function BookProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [books, setBooks] = React.useState<BookContextType["books"]>([]);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    );
}

export function useBooks() {
    return React.useContext(BookContext);
}