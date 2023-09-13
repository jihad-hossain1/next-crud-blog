// import React from 'react';

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-orange-600 py-6 px-4 shadow drop-shadow rounded">
      <Link className="text-white font-bold" href="/">
        Crud Oparation
      </Link>
      <div className="flex space-x-3">
        <Link className="hover:underline " href="/addTopic">
          Add Topic
        </Link>
        <Link className="hover:underline " href="/addBlog">
          Add blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
