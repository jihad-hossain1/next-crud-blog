import connectMongoDB from "@/libs/mongodb";
import Articles from "@/models/articles";
// import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description, newImage: image, newCategoryId: categoryId } = await request.json();
    await connectMongoDB();
    await Articles.findByIdAndUpdate(id, { title, description, image, categoryId });
    return NextResponse.json({ message: "Articles updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const article = await Articles.findOne({ _id: id });
    return NextResponse.json({ article }, { status: 200 });
}
