"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4 ">
      <h4 className="text-2xl font-extralight text-gray-700 text-center mb-8">
        Update Your Topic
      </h4>
      <form action="" className="max-w-xl mx-auto p-2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            name="title"
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            id=""
            cols="30"
            rows="10"
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="update topic"
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
