"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4 ">
      <form onSubmit={handleSubmit} action="" className="max-w-xl mx-auto p-2">
        <div className="mb-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>

        <div className="mb-4">
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>
        <div>
          <input
            type="submit"
            value="add topic"
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTopic;
