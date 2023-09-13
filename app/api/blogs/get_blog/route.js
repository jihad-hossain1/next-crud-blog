// import connectMongoDB from "@/libs/mongodb";
import connectMongoDB from "@/libs/mongodb";
import { Task } from "@/models/taskmodel";
// import Articles from "@/models/articles";
// import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    if (req.method !== "GET") {
        res.status(405).send({ msg: 'only get request are allowed.' })
    }
    try {
        await connectMongoDB();
        const tasks = await Task.find();
        res.status(200).send(tasks)
        // return NextResponse.json({ articles });
    } catch (error) {
        console.log(error);
        res.status(400).send({ error, msg: 'some error get......' })
    }
}

