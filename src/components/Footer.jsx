import React from "react";
import { Camera, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm mt-auto py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Camera className="w-6 h-6 text-primary-600" />
            <span className="font-display font-bold text-xl tracking-tight">PixelVault</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            Premium stock media powered by Unsplash and Pexels.
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          Made with <Heart className="w-4 h-4 text-red-500 inline mx-1 fill-red-500" /> by You.
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
