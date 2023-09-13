import connectMongoDB from "@/libs/mongodb";
import Articles from "@/models/articles";
// import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, image, categoryId } = await request.json();
    await connectMongoDB();
    await Articles.create({ title, description, image, categoryId });
    return NextResponse.json({ message: "Articles Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const articles = await Articles.find();
    return NextResponse.json({ articles });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Articles.findByIdAndDelete(id);
    return NextResponse.json({ message: "Articles deleted" }, { status: 200 });
}
