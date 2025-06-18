"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showTop) return null;

  return (
    <button
      onClick={handleBackToTop}
      className="fixed z-40 bottom-28 right-6 bg-emerald-500 text-white rounded-full shadow-lg p-3 hover:bg-emerald-600 transition-colors flex items-center justify-center"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      aria-label="Back to Top"
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
} 