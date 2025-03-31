import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { SingleBlogType } from "@/core/services/models/blogs-models";

export default async function GetBlogById(
  id: string
): Promise<AxiosResponse<SingleBlogType>> {
  const response = http.get(`/blogs/${id}`);
  return response;
}
