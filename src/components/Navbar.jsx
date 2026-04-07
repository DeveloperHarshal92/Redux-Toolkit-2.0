import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 px-10 py-6">
      <h2 className="font-medium text-2xl">Media Search</h2>
      <div className="flex gap-5 items-center">
        <Link className="text-base font-medium rounded px-4 py-2  " to="/">
          Search
        </Link>
        <Link
          className="text-base font-medium rounded px-4 py-2  "
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
