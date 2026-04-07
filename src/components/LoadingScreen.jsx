import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Camera } from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate logo in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
    .to(pulseRef.current, {
      opacity: 0.5,
      scale: 1.5,
      repeat: 3,
      yoyo: true,
      duration: 0.5,
    }, "-=0.4")
    // Hold for a moment to allow initial renders
    .to({}, { duration: 0.5 })
    // Fade out screen
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      display: "none"
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50"
    >
      <div className="relative flex flex-col items-center">
        <div ref={pulseRef} className="absolute inset-0 rounded-full bg-primary-500 blur-xl opacity-0"></div>
        <div ref={logoRef} className="relative z-10 flex flex-col items-center gap-4">
          <div className="bg-primary-600 text-white p-4 rounded-2xl shadow-xl shadow-primary-500/20">
            <Camera size={48} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight">PixelVault</h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
