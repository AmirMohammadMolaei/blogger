import { CategoriesType } from "@/core/services/models/category-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";

export async function GetCategoryById(
  id: string
): Promise<AxiosResponse<CategoriesType>> {
  const response = await http.get(`/categories/${id}`);
  return response;
}
