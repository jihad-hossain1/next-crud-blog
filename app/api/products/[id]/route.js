import connectMongoDB from "@/libs/mongodb";
import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Products.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Products.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
