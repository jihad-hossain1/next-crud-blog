"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditBlogForm = ({ id, title, description, image, categoryId }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const [newCategoryId, setNewCategoryId] = useState(categoryId);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_URL}/api/blogs/${id}`, {
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
      <form onSubmit={handleSubmit} action="" className="max-w-xl mx-auto p-2">
        <div className="mb-4">
          <label htmlFor="articlesName">articlesName</label>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="articles Photo or photoUrl">
            articles Photo or photoUrl
          </label>
          <input
            onChange={(e) => setNewImage(e.target.value)}
            value={newImage}
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryId">categoryId</label>
          <input
            onChange={(e) => setNewCategoryId(e.target.value)}
            value={newCategoryId}
            type="number"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="update Blog"
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBlogForm;
