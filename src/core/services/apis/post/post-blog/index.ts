import { SingleBlogType } from "@/core/services/models/blogs-models";
import http from "../../../interceptor";
import { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function CreateBlog(
  params: Omit<SingleBlogType, "id">
): Promise<AxiosPromise<SingleBlogType>> {
  const response = http.post("/blogs", params);
  return response;
}

export function useCreateBlog() {
  return useMutation({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: CreateBlog,
    onSuccess: () => {
      toast.success("وبلاگ شما با موفقیت ساخته شد");
    },
  });
}
