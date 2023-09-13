import connectMongoDB from "@/libs/mongodb";
import Products from "@/models/products";
// import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Products.create({ title, description });
    return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const products = await Products.find();
    return NextResponse.json({ products });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Products.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
