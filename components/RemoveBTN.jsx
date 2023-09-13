"use client";

import { useRouter } from "next/navigation";
import { IoOpenSharp, IoTrashBin } from "react-icons/io5";

const RemoveBTN = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${process.env.NEXT_URL}/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div>
      <button onClick={removeTopic} className="font-bold text-red-700">
        <IoTrashBin className="text-2xl "></IoTrashBin>
      </button>
    </div>
  );
};

export default RemoveBTN;
