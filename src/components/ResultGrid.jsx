import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import { setResult, setLoading, setError, setPage } from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";
import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const SkeletonCard = () => {
  // Random height for masonry effect on skeletons
  const heights = ['h-48', 'h-64', 'h-80', 'h-96'];
  const randomHeight = heights[Math.floor(Math.random() * heights.length)];
  return <div className={`skeleton w-full ${randomHeight}`}></div>;
};

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, page, result, loading, error } = useSelector(
    (store) => store.search,
  );
  const gridRef = useRef(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTabs == "photos") {
          const response = await fetchPhotos(query, page);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Untitled Photo",
            thumbnail: item.urls.small,
            src: item.urls.regular, // using regular for better quality/performance balance
            url: item.links.html,
          }));
        }
        if (activeTabs == "videos") {
          const response = await fetchVideos(query, page);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0]?.link,
            url: item.url,
          }));
        }
        if (activeTabs == "gifs") {
          const response = await fetchGifs(query, page);
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_height_small_still?.url || item.images.fixed_height?.url,
            src: item.images.original?.url,
            url: item.url,
          }));
        }
        dispatch(setResult(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTabs, page, dispatch]);

  // GSAP animation when results change and are loaded
  useEffect(() => {
    if (!loading && result.length > 0 && gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.result-card-anim');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", clearProps: "all" }
      );
    }
  }, [result, loading]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <div className="bg-red-100 dark:bg-red-900/30 text-red-500 p-4 rounded-full mb-4">
          <ImageOff size={32} />
        </div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Oops, something went wrong</h3>
        <p className="text-gray-500 mt-2">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-10 mt-4">
        <div className="masonry-grid">
          {Array.from({ length: 12 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (!loading && result.length === 0 && query) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-400 p-4 rounded-full mb-4">
          <ImageOff size={32} />
        </div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">No results found</h3>
        <p className="text-gray-500 mt-2">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col min-h-screen">
      <div ref={gridRef} className="masonry-grid flex-grow">
        {result.map((item, idx) => (
          <div key={item.id || idx} className="result-card-anim">
            <ResultCard item={item} />
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {result.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-12 mb-8">
          <button
            onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
            disabled={page === 1}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          
          <span className="text-gray-500 dark:text-gray-400 font-medium px-4">
            Page {page}
          </span>
          
          <button
            onClick={() => dispatch(setPage(page + 1))}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all active:scale-95"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultGrid;
