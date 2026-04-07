import React from "react";
import { Camera, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm mt-auto py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Camera className="w-6 h-6 text-primary-600" />
            <span className="font-display font-bold text-xl tracking-tight">
              PixelVault
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            Premium stock media powered by Unsplash and Pexels.
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          Made with{" "}
          <Heart className="w-4 h-4 text-red-500 inline mx-1 fill-red-500" /> by
          You.
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <a
            target="_blank"
            href="https://github.com/DeveloperHarshal92"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/harshal-varade-07945a3a3/"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
