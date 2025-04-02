import { CategoriesType } from "@/core/services/models/category-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function DeleteCategory(
  id: string
): Promise<AxiosResponse<CategoriesType>> {
  const response = await http.delete(`/categories/${id}`);
  return response;
}

export const useDeleteCategory = () => {
  return useMutation({
    mutationKey: ["DELETE_CATEGORY"],
    mutationFn: DeleteCategory,
    onSuccess: () => {
      toast.success("دسته بندی مورد نظر با موفقیت حذف شد");
    },
  });
};
