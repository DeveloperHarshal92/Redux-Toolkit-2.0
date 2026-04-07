import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Home } from "lucide-react";
import gsap from "gsap";

const NotFoundPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Glitch animation effect
    gsap.to(".glitch-effect", {
      x: () => Math.random() * 10 - 5,
      y: () => Math.random() * 10 - 5,
      opacity: () => Math.random() * 0.5 + 0.5,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "steps(5)"
    });
    
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out"}
    );
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div ref={containerRef} className="max-w-md w-full flex flex-col items-center gap-6">
        <div className="relative">
          <h1 className="text-9xl font-display font-black text-gray-900 dark:text-white relative z-10">404</h1>
          <h1 className="text-9xl font-display font-black text-primary-600/50 absolute top-0.5 left-0.5 glitch-effect z-0 blur-sm">404</h1>
          <h1 className="text-9xl font-display font-black text-red-500/30 absolute -top-0.5 -left-0.5 glitch-effect mx-1 z-0 blur-[2px]">404</h1>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-500" />
            Lost in the Vault
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            The image or video you're looking for seems to have vanished into the digital void.
          </p>
        </div>

        <Link to="/" className="btn-primary mt-4 flex items-center gap-2">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
