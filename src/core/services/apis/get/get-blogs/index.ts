import { AxiosResponse } from "axios";
import http from "../../../interceptor";
import { SingleBlogType } from "@/core/services/models/blogs-models";

export default async function GetAllBlogs(): Promise<
  AxiosResponse<SingleBlogType[]> | any
> {
  const response = await http.get("/blogs");
  return response;
}
