import { getTopics } from "@/utils/getTopics";
// import SingleTopic from "./SingleTopic";
import { IoOpenSharp, IoTrashBin } from "react-icons/io5";
import RemoveBTN from "./RemoveBTN";
import Link from "next/link";

const getMyTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicList() {
  const { topics } = await getMyTopics();
  return (
    <div>
      {topics ? (
        topics.map((topic) => (
          <div
            key={topic._id}
            className="p-4 border-slate-300 border my-3 flex justify-between gap-5"
          >
            <div>
              <h2 className="text-xl font-semibold">{topic?.title}</h2>
              <p>{topic?.description}</p>
            </div>
            <div className="flex items-start space-x-3">
              <RemoveBTN id={topic?._id}></RemoveBTN>
              <Link href={`/editTopic/${topic._id}`}>
                <IoOpenSharp className="text-2xl " />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold">No content here ....</div>
        </div>
      )}
    </div>
  );
}
