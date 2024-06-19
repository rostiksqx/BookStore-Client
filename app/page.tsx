"use client";

import { Books } from "@/components/Books";
import { useEffect, useState } from "react";
import {
  BookRequest,
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from "@/app/api/books";
import { CreateUpdateBook, Mode } from "@/components/CreateUpdate";
import { Button } from "@/components/ui/button";

export default function BooksPage() {
  const defaultValues = {
    title: "",
    description: "",
    price: 1,
  } as Book;

  const [values, setValues] = useState<Book>({
    title: "",
    description: "",
    price: 1,
  } as Book);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getBooks = async () => {
      const books = await getAllBooks();
      setLoading(false);
      setBooks(books);
    };

    getBooks();
  }, []);

  const handleCreateBook = async (request: BookRequest) => {
    await createBook(request);
    closeModal();

    const books = await getAllBooks();
    setBooks(books);
  };

  const handleUpdateBook = async (id: string, request: BookRequest) => {
    await updateBook(id, request);
    closeModal();

    const books = await getAllBooks();
    setBooks(books);
  };

  const handleDeleteBook = async (id: string) => {
    await deleteBook(id);
    closeModal();

    const books = await getAllBooks();
    setBooks(books);
  };

  const openModal = () => {
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);
  };

  const openEditModal = (book: Book) => {
    setMode(Mode.Update);
    setValues(book);
    setIsModalOpen(true);
  };

  return (
    <div>
      {loading ? null : (
        <Button
          className="m-8"
          onClick={openModal}
        >
          Add Book
        </Button>
      )}

      <CreateUpdateBook
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCancel={closeModal}
        handleCreate={handleCreateBook}
        handleUpdate={handleUpdateBook}
      />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Books
          books={books}
          handleOpen={openEditModal}
          handleDelete={handleDeleteBook}
        />
      )}
    </div>
  );
}
