import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removedToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removedToast());
  };
  return (
    <div className="w-[18vw] relative h-100 bg-white rounded-2xl overflow-hidden">
      <a className="h-full" target="_blank" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center w-full px-4 py-6 text-white absolute bottom-0 gap-3 bg-linear-to-b from-transparent to-black"
      >
        <h2 className="h-12 overflow-hidden text-lg font-semibold capitalize">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="p-2 rounded-full cursor-pointer bg-linear-to-b from-trasparent to-black/40 active:scale-95"
        >
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,1)"
          >
            <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
