import { ALL_CATEGORIES, SINGLE_CATEGORY } from "../../utils/queryKeys";
import { useQuery } from "react-query";
import {
  getAllCategories,
  getSingleCategory,
} from "../../services/api/category";

export const useGetAllCategories = (options = {}) => {
  const res = useQuery(ALL_CATEGORIES, getAllCategories, options);
  return res;
};

export const useGetCategoryById = (categoryName: string, options = {}) => {
  const res = useQuery(
    [SINGLE_CATEGORY, categoryName],
    getSingleCategory,
    options
  );
  return res;
};
