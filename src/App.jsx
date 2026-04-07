import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  // When initial app load completes
  const handleLoadingComplete = () => {
    setInitialLoading(false);
  };

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        {initialLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        
        {/* Hide content until loading is complete to prevent layout shift flashes */}
        <div style={{ opacity: initialLoading ? 0 : 1 }} className="transition-opacity duration-500 flex flex-col flex-grow">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
        <ToastContainer />
      </div>
    </SmoothScroll>
  );
};

export default App;
