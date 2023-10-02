import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const item = await prisma.Item.findUnique({
      where: {
        id,
      },
    });
    if (!item) {
      return NextResponse.json({ message: "Post Error", status: 500 });
    }
    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({ message: "Post Error", status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;
    const body = await request.json();
    console.log(id, body);
    const updateItem = await prisma.Item.update({
      where: { id },
      data: body,
    });
    if (!updateItem) {
      return NextResponse.json({ message: "Update Error", status: 500 });
    }
    return NextResponse.json(updateItem);
  } catch (err) {
    return NextResponse.json({ message: "Update Error", status: 500 });
  }
};

export const DELETE = async (request,{ params }) => {
  try {
    const { id } = params;
    await prisma.Item.delete({
      where: {
        id
      }
    });
    return NextResponse.json({message:"Delete Done"});
  } catch (err) {
    return NextResponse.json({ message: "Delete Error", status: 500 });
  }
};