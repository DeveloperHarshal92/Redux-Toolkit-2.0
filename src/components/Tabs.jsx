import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
import { Image as ImageIcon, Video, Sticker } from "lucide-react";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTabs);

  const tabs = [
    { id: "photos", label: "Photos", icon: ImageIcon },
    { id: "videos", label: "Videos", icon: Video },
    { id: "gifs", label: "GIFs", icon: Sticker }
  ];

  return (
    <div className="flex justify-center w-full py-8 mt-2 -mb-2 z-10 relative">
      <div className="bg-gray-100 dark:bg-gray-800/80 p-1.5 rounded-full inline-flex border border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => dispatch(setActiveTabs(tab.id))}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
                isActive
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-primary-600 rounded-full shadow-md z-0"></span>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
