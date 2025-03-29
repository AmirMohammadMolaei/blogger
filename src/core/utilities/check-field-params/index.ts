import { ValidationsType } from "@/app/api/blogs/validations";

export function CheckFieldParams<T>(
  params: Partial<T>,
  validation: ValidationsType
) {
  const errors: string[] = [];

  // check fields in params
  // if these params do not have a field
  // so create a error
  for (const [field, errorMassage] of Object.entries(validation)) {
    if (!params[field as keyof T]) {
      errors.push(errorMassage);
    }
  }

  return errors;
}
