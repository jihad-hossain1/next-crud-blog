import connectMongoDB from "@/libs/mongodb";
// import Articles from "@/models/articles";
import { Task } from "@/models/taskmodel";

export default async function handler(req, res) {
    // res.status(201).send('hello there')

    if (req.method !== "POST") {
        res.status(405).send({ msg: "only post method allowed" })
        return;
    }

    const { task } = req.body;

    try {
        await connectMongoDB()
        Task.create({ task }).then((data) => {
            console.log(data);
            res.status(201).send(data)
        })

    } catch (err) {
        console.log(err);
        res.status(400).send({ err, msg: "something error......" })
    }

}