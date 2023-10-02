import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    // const { title, description } = body;
    const newItems = await prisma.Item.create({
      data: body
    });
    return NextResponse.json(newItems);
  } catch (err) {
    return NextResponse.json({ message: "Post Error", status: 500 });
  }
};
export const GET = async () => {
  try {
    // const { title, description } = body;
    const items = await prisma.Item.findMany();
    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json({ message: "Post Error", status: 500 });
  }
};
