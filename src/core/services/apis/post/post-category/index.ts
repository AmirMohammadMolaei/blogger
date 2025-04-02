import { CategoriesType } from "@/core/services/models/category-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function CreateCategory(
  params: Omit<CategoriesType, "id">
): Promise<AxiosResponse<CategoriesType>> {
  const response = await http.post("/categories", params);
  return response;
}

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ["CREATE-CATEGORY"],
    mutationFn: CreateCategory,
    onSuccess: () => {
      toast.success("وبلاگ شما با موفقیت ساخته شد");
    },
  });
};
