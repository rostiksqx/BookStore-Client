export interface BookRequest {
  title: string;
  description: string;
  price: number;
}

const url = "https://localhost:44318";

export const getAllBooks = async () => {
  const response = await fetch(`${url}/api/books`);

  return response.json();
};

export const getBook = async (id: string) => {
  const response = await fetch(`${url}/api/books/${id}`);

  return response.json();
};

export const createBook = async (bookRequest: BookRequest) => {
  await fetch(`${url}/api/books`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookRequest),
  });
};

export const updateBook = async (id: string, bookRequest: BookRequest) => {
  await fetch(`${url}/api/books/${id}`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookRequest),
  });
};

export const deleteBook = async (id: string) => {
  await fetch(`${url}/api/books/${id}`, {
    method: "Delete",
  });
};
