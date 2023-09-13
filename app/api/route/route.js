import connectMongoDB from "@/libs/mongodb";
import Articles from "@/models/articles";
// import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const articles = await Articles.find();
    return NextResponse.json(articles);
}