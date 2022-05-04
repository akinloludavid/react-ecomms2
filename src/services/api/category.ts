import axios from "axios";
import { productsBaseUrl } from "./products";

export const getAllCategories = async () => {
 const res = await axios.get(`${productsBaseUrl}/categories`);

 return res.data;
};

export const getSingleCategory = async (params: any) => {
 const { queryKey } = params;
 const [, categoryName] = queryKey;
 const res = await axios.get(`${productsBaseUrl}/category/${categoryName}`);
 return res.data;
};
