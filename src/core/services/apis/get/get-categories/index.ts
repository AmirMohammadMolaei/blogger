import { CategoriesType } from "@/core/services/models/category-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";

export async function GetCategories(): Promise<
  AxiosResponse<CategoriesType[]> | any
> {
  const response = await http.get("/categories");
  return response;
}
