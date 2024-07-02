export type Book = {
    id: number;
    title: string;
    description: string;
    price: number;
    author: string;
    publishedDate: string;
    categories: Category[];
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
    loading: boolean;
};

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export type searchParams = {
    error: string;
};