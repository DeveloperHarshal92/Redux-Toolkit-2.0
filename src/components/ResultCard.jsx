import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";
import { Bookmark, ExternalLink, Play } from "lucide-react";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const addToCollection = (e, item) => {
    e.preventDefault(); // Prevent navigating if clicking the button
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      href={item.url}
      className="group relative block rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-primary-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Content */}
      <div className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {item.type === "photo" || item.type === "gif" ? (
          <img
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            src={item.src}
            loading="lazy"
            alt={item.title}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div className="relative">
            <video
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              autoPlay
              loop
              muted
              playsInline
              src={item.src}
              onLoadedData={() => setIsLoaded(true)}
            ></video>
            {!isHovered && (
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-1.5 rounded-full text-white">
                <Play size={16} fill="white" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hover Overlay Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

      {/* Hover Content */}
      <div className={`absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        {/* Top Controls */}
        <div className="flex justify-end gap-2 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => addToCollection(e, item)}
            className="p-2.5 rounded-xl bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors active:scale-95"
            aria-label="Add to collection"
          >
            <Bookmark size={20} />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
          <h2 className="text-white font-medium text-lg leading-tight line-clamp-2 capitalize drop-shadow-md">
            {item.title}
          </h2>
          <div className="flex items-center gap-1 text-gray-300 text-sm mt-1">
            <span>View original</span>
            <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ResultCard;
