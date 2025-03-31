import { NextRequest } from "next/server";
import { Categories } from "../data";
import { CategoriesType } from "@/core/services/models/category-models";
import { CheckFieldParams } from "@/core/utilities/check-field-params";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const selected = Categories.find((i) => i.id === id);

  if (!selected)
    return new Response(JSON.stringify({ errorMassage: "item not found" }), {
      status: 404,
    });

  return new Response(JSON.stringify(selected), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const selected = Categories.findIndex((i) => i.id === id);
  const show = Categories[selected];

  if (selected == -1)
    return new Response(JSON.stringify({ errorMassage: "item not found" }), {
      status: 404,
    });

  Categories.splice(selected, 1);

  return new Response(JSON.stringify(show), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const field: Pick<CategoriesType, "name"> = await request.json();
  const paramsValidation = { name: "name is require" };

  const errors: string[] = CheckFieldParams<Pick<CategoriesType, "name">>(
    field,
    paramsValidation
  );

  if (errors.length > 0)
    return new Response(JSON.stringify({ errorMassage: errors }), {
      status: 400,
    });

  const selected = Categories.findIndex((i) => i.id === id);
  if (selected == -1)
    return new Response(JSON.stringify({ errorMassage: "item not found" }), {
      status: 404,
    });

  const editedCategory: CategoriesType = {
    id: id,
    name: field.name,
  };

  Categories[selected] = editedCategory;

  return new Response(JSON.stringify(editedCategory), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
