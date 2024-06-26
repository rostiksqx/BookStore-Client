import fetcher from "./fetcher";
import { url } from "./constants";

export const getAllBooks = async () => {
    const response = await fetcher({ url: `${url}/books` });
    return response;
};

export const getBook = async (id: string) => {
    const response = await fetcher({ url: `${url}/books/${id}` });
    return response;
};