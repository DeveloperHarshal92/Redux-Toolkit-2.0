import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex bg-gray-700 p-10 gap-5"
      >
        <input
          value={text}
          required
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full border-2 px-4 py-2 text-2xl rounded outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="search anything..."
        />
        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-2xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
