import http from "../../../interceptor";

export default async function DeleteBlog(id: string) {
  http.delete(`/blogs/${id}`);
}
