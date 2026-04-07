import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";
import { Camera, Search, Bookmark, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const location = useLocation();

  const isDark = theme?.isDark ?? document.documentElement.classList.contains("dark");

  const navLinks = [
    { path: "/", label: "Explore", icon: Search },
    { path: "/collection", label: "Collection", icon: Bookmark },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 text-gray-900 dark:text-white group">
          <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:bg-primary-500 transition-colors">
            <Camera size={24} strokeWidth={2} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">PixelVault</span>
        </Link>

        {/* Links & Controls */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2 bg-gray-100/50 dark:bg-gray-900/50 p-1 rounded-xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:block">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none active:scale-95"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
