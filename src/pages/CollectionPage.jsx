import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const clearAll = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto py-6 px-10">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-medium">Your collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition-all cursor-pointer bg-red-700 px-5 py-2 text-xl font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-medium">Collection is empty</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition-all cursor-pointer bg-red-700 px-5 py-2 text-xl font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      )}
      <div className="flex h-screen w-full justify-start flex-wrap gap-2">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
