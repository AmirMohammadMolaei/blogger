import { NextRequest } from "next/server";
import { Blogs } from "../data";
import { SingleBlogType } from "@/core/services/models/blogs-models";
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const finedItems: SingleBlogType | undefined = Blogs.find((i) => i.id === id);

  if (!finedItems)
    return new Response(JSON.stringify({ errorMassage: "blog not found" }), {
      status: 400,
    });

  return new Response(JSON.stringify(finedItems), { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const indexItem = Blogs.findIndex((i) => i.id === id);

  if (indexItem === -1)
    return new Response(JSON.stringify({ errorMassage: "item not found" }), {
      status: 404,
    });

  const selectedBlog = Blogs[indexItem]; // get blog for show this
  Blogs.splice(indexItem, 1); // deleted blog from db

  return new Response(JSON.stringify(selectedBlog), { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const field: Partial<SingleBlogType> = await request.json();

  const selected = Blogs.findIndex((i) => i.id === id);

  if (!selected)
    return new Response(JSON.stringify({ errorMassage: "item not found" }), {
      status: 404,
    });

  const editedBlog: Required<SingleBlogType> = {
    id: id,
    name: field.name ?? Blogs[selected].name,
    category: field.category ?? Blogs[selected].category,
    authorId: Blogs[selected].authorId,
    caption: field.caption ?? Blogs[selected].caption,
    picture: field.picture ?? Blogs[selected].picture,
  };

  Blogs[selected] = editedBlog;

  return new Response(JSON.stringify(editedBlog), { status: 201 });
}
