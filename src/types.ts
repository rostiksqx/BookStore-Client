export type Book = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

export type BookContextType = {
    books: Book[];
    setBooks: (books: Book[]) => void;
};