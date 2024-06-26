import fetcher from "./fetcher";
import { url } from "./constants";

export const getAllCategories = async () => {
    const response = await fetcher({ url: `${url}/categories` });
    return response;
}

export const getCategory = async (id: string) => {
    const response = await fetcher({ url: `${url}/categories/${id}` });
    return response;
}