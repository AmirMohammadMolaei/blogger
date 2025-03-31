/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from "next/server";
import { SingleBlogType } from "@/core/services/models/blogs-models";
import { CheckFieldParams } from "@/core/utilities/check-field-params";
import { CreateBlogValidations } from "./validations";
import GenerateId from "@/core/utilities/generate-unique-id";
import { Blogs } from "./data";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("Query");
  // const category = searchParams.get("Category");
  // const authorId = searchParams.get("AuthorId");

  return new Response(JSON.stringify(Blogs), { status: 200 });
}

export async function POST(request: NextRequest) {
  const params: Partial<SingleBlogType> = await request.json();

  const errors: string[] = CheckFieldParams<SingleBlogType>(
    params,
    CreateBlogValidations
  );

  if (errors.length > 0)
    return new Response(JSON.stringify({ errorMassages: errors }), {
      status: 400,
    });

  const newBlog: Required<SingleBlogType> = {
    id: GenerateId(10),
    name: params.name ?? "",
    category: params.category ?? 0,
    authorId: 2012,
    caption: params.caption ?? "",
    picture: params.picture ?? null,
  };

  return new Response(JSON.stringify(newBlog), { status: 201 });
}
