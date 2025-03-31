import { SingleBlogType } from "../blogs-models";

export type SingleUserType = {
  id: string;
  fName: string;
  lName: string;
  picture: string | null;
  blogs: SingleBlogType[] | null;
  favorite: SingleBlogType[] | null;
  email: string | null;
  phone: string | null;
};
