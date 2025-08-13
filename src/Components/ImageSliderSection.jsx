import { useState, useEffect } from "react";

export default function ImageSliderSection() {
  // Images for the slider
  const images = ["/GCC-img.png", "/GCC-img-1.png", "/GCC-img-2.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Full background image (changes automatically) */}
      <div
        className="w-full h-96 rounded-2xl flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      ></div>

      {/* Top-right circle */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Bottom-left circle */}
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Text stays the same */}
      <div className="text-center drop-shadow-lg">
        <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Empowering GCC Organizations
        </p>
      </div>
    </div>
  );
}
