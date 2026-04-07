import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Search, TrendingUp } from "lucide-react";
import gsap from "gsap";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const heroRef = useRef(null);
  const inputRef = useRef(null);

  const trendingTags = ["Nature", "Technology", "Architecture", "Abstract", "Minimal"];

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(setQuery(text));
    }
  };

  const handleTagClick = (tag) => {
    setText(tag);
    dispatch(setQuery(tag));
  };

  return (
    <div className="w-full relative bg-white dark:bg-gray-950 py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-black z-0 pointer-events-none transition-colors duration-300"></div>
      
      <div ref={heroRef} className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8 text-center text-gray-900 dark:text-white transition-colors duration-300">
        <div className="space-y-3 sm:space-y-4 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
            The best free stock photos, <br className="hidden sm:block"/> royalty free images & videos
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powered by creators everywhere. Search stunning high-quality media for your next project.
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="w-full max-w-3xl relative flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-2xl transition-all focus-within:ring-4 focus-within:ring-primary-500/30 rounded-2xl sm:mx-0"
        >
          <div className="absolute left-4 sm:left-6 text-gray-400 dark:text-gray-500">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl py-4 sm:py-5 pl-12 sm:pl-16 pr-24 sm:pr-32 text-base sm:text-xl outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors border border-gray-200 dark:border-gray-700 focus:border-transparent"
            type="text"
            placeholder="Search stunning media..."
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-500 text-white px-4 sm:px-6 rounded-xl text-sm sm:text-base font-medium transition-colors active:scale-[0.98]"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-4 px-2">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <TrendingUp size={16} className="text-gray-400 dark:text-gray-500 hidden sm:block" />
            Trending:
          </span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="text-xs sm:text-sm px-3 py-1.5 sm:py-1 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 rounded-full transition-colors border border-gray-200 dark:border-white/10"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
