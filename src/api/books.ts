
const url = "http://127.0.0.1:8080/api"

export const getAllBooks = async () => {
    const response = await fetch(`${url}/books`);
    return response.json();
}

export const getBook = async (id: string) => {
    const response = await fetch(`${url}/books/${id}`);
    return response.json();
};