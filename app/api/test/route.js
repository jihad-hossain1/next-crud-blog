import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}