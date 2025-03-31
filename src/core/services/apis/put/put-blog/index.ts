import { SingleBlogType } from "@/core/services/models/blogs-models";
import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function UpdateBlog(
  params: Omit<SingleBlogType, "authorId">
): Promise<AxiosResponse<SingleBlogType>> {
  const response = http.put(`/blogs/${params.id}`, params);
  return response;
}

export function useUpdateBlog() {
  return useMutation({
    mutationKey: ["UPDATE_BLOG"],
    mutationFn: UpdateBlog,
    onSuccess: () => {
      toast.success("وبلاگ شما با موفقیت ویرایش شد");
    },
  });
}
