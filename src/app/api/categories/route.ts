import { NextRequest } from "next/server";
import { Categories } from "./data";
import { CheckFieldParams } from "@/core/utilities/check-field-params";
import { CategoriesType } from "@/core/services/models/category-models";
import GenerateId from "@/core/utilities/generate-unique-id";

export async function GET() {
  return new Response(JSON.stringify(Categories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  const params: Pick<CategoriesType, "name"> = await request.json();
  const paramsValidation = { name: "name is require" };

  const errors: string[] = CheckFieldParams<Pick<CategoriesType, "name">>(
    params,
    paramsValidation
  );

  if (errors.length > 0)
    return new Response(JSON.stringify({ errorMassage: errors }), {
      status: 400,
    });

  const newCategory: CategoriesType = {
    id: GenerateId(10),
    name: params.name,
  };

  Categories.push(newCategory);

  return new Response(JSON.stringify(newCategory), { status: 201 });
}
