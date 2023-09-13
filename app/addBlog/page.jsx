"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image || !categoryId) {
      alert(
        "Title , description , Image or image-Link, categoryId are required."
      );
      return;
    }

    try {
      const res = await fetch(`/api/blogs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, image, categoryId }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog");
      }
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryId">categoryId</label>
          <input
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="add Blog"
            className="w-full focus:outline-none px-2 py-1 border border-neutral-800 placeholder:text-cyan-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
