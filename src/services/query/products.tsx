import { ALL_PRODUCTS, SINGLE_PRODUCT } from "../../utils/queryKeys";
import { useQuery, useQueryClient } from "react-query";
import { getAllProducts, getSingleProduct } from "../../services/api/products";
import { IGetAllProducts } from "../../types";

export const useGetAllProducts = (category: string, options = {}) => {
  const res = useQuery([ALL_PRODUCTS, category], getAllProducts, {
    ...options,
  });
  return res;
};

export const useGetProductById = (id: string, options = {}) => {
  const queryClient: any = useQueryClient();
  const res = useQuery([SINGLE_PRODUCT, id], getSingleProduct, {
    ...options,
    initialData: () => {
      return queryClient
        .getQueryData(ALL_PRODUCTS)
        ?.find((product: IGetAllProducts) => product.id === Number(id));
    },
  });
  return res;
};
