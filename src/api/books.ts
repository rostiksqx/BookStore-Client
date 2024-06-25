import fetcher from "./fetcher";

const url = "http://127.0.0.1:8080/api"

export const getAllBooks = async () => {
    const response = await fetcher({ url: `${url}/books` });
    return response;
};

export const getBook = async (id: string) => {
    const response = await fetcher({ url: `${url}/books/${id}` });
    return response;
};