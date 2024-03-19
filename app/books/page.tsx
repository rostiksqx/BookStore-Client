"use client";

import Button from "antd/es/button/button";
import { Books } from "@/app/components/Books";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/app/services/books";
import Title from "antd/es/typography/Title";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const books = await getAllBooks();
      setLoading(false);
      setBooks(books);
    };

    getBooks();
  }, []);

  return (
    <div>
      <Button style={{ margin: 20 }}>Add Book</Button>

      {loading && <Title>Loading...</Title>}
      <Books books={books} />
    </div>
  );
}
