export type Book = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: Category[];
    image: string;
};

export type Category = {
    id: number;
    name: string;
};

export type BookContextType = {
    books: Book[];
    setBooks: (books: Book[]) => void;
    categories: Category[];
    setCategories: (categories: Category[]) => void;
};