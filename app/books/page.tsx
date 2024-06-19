"use client";

import Button from "antd/es/button/button";
import { Books } from "@/components/Books";
import { useEffect, useState } from "react";
import {
  BookRequest,
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from "@/app/api/books";
import Title from "antd/es/typography/Title";
import { CreateUpdateBook, Mode } from "@/components/CreateUpdate";

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
          type="primary"
          style={{ margin: "30px" }}
          size="large"
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
        <Title>Loading...</Title>
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
