export type ValidationsType = { [key: string]: string };

export const CreateBlogValidations: ValidationsType = {
  name: "name is require",
  category: "category is require",
};
