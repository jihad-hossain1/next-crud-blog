"use client";

import { useRouter } from "next/navigation";
import { IoOpenSharp, IoTrashBin } from "react-icons/io5";

const RemoveBlogBTN = ({ id }) => {
  const router = useRouter();
  const removeBlog = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div>
      <button onClick={removeBlog} className="font-bold text-red-700">
        <IoTrashBin className="text-2xl "></IoTrashBin>
      </button>
    </div>
  );
};

export default RemoveBlogBTN;
