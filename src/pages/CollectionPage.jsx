import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";
import { FolderOpen, Trash2, Library } from "lucide-react";
import gsap from "gsap";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const gridRef = useRef(null);

  const clearAll = () => {
    dispatch(clearCollection());
  };

  useEffect(() => {
    if (collection.length > 0 && gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.collection-card-anim');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out", clearProps: "all" }
      );
    }
  }, [collection.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 min-h-[60vh] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-xl">
            <Library size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Your Collection</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{collection.length} item{collection.length !== 1 ? 's' : ''} saved</p>
          </div>
        </div>
        
        {collection.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 group text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 px-4 py-2 rounded-xl transition-all"
          >
            <Trash2 size={16} className="group-hover:scale-110 transition-transform" />
            Clear Collection
          </button>
        )}
      </div>

      {collection.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
          <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-full mb-6 relative">
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-700 animate-[ping_3s_ease-in-out_infinite]"></div>
            <FolderOpen size={48} className="text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Your collection is empty</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
            Start browsing and click the bookmark icon on any photo or video to save it here for later.
          </p>
        </div>
      ) : (
        <div ref={gridRef} className="masonry-grid flex-grow">
          {collection.map((item, idx) => (
            <div key={item.id || idx} className="collection-card-anim">
              <CollectionCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
