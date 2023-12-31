import { IoOpenSharp } from "react-icons/io5";
import RemoveBlogBTN from "./RemoveBlogBTN";
import Link from "next/link";
// import { useEffect, useState } from "react";

const getmyBlogs = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    // const articles =
    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};

export default async function BlogsList() {
  const { articles } = await getmyBlogs();

  return (
    <div>
      {articles ? (
        articles.map((blog) => (
          <div
            key={blog?._id}
            className="p-4 border-slate-300 border my-3 flex justify-between gap-5"
          >
            <div className="flex flex-col justify-center">
              <div className="max-w-[200px]">
                <img className="rounded object-cover" src={blog?.image}></img>
              </div>
              <h2 className="text-xl font-semibold">{blog?.title}</h2>
              <p>{blog?.description}</p>
            </div>
            <div className="flex items-start space-x-3">
              <RemoveBlogBTN id={blog?._id}></RemoveBlogBTN>
              <Link href={`/updateBlog/${blog._id}`}>
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
