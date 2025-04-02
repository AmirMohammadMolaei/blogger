import { CategoriesType } from "@/core/services/models/category-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function UpdateCategory(
  params: CategoriesType
): Promise<AxiosResponse<CategoriesType>> {
  const response = await http.put(`/categories/${params.id}`, params);
  return response;
}

export const useUpdateCategory = () => {
  return useMutation({
    mutationKey: ["UPDATE-CATEGORY"],
    mutationFn: UpdateCategory,
    onSuccess: () => {
      toast.success("دسته بندی مورد نظر با موفقیت ویرایش شد");
    },
  });
};
