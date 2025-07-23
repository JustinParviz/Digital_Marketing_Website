import React, { useState } from "react";

// Placeholder video URLs and client labels
const videos = [
  { src: "", client: "Client 1" },
  { src: "", client: "Client 2" },
  { src: "", client: "Client 3" },
  { src: "", client: "Client 4" },
  { src: "", client: "Client 5" },
  { src: "", client: "Client 6" },
  { src: "", client: "Client 7" },
];

const getTransform = (index, activeIndex, total) => {
  // 3D carousel math: center is 0, left/right are negative/positive
  const offset = index - activeIndex;
  const angle = offset * 30;
  const z = -Math.abs(offset) * 80;
  const scale = offset === 0 ? 1 : 0.85;
  const opacity = offset === 0 ? 1 : 0.5;
  return {
    transform: `rotateY(${angle}deg) translateZ(${300 + z}px) scale(${scale})`,
    opacity,
    zIndex: total - Math.abs(offset),
  };
};

const PortfolioPreview = () => {
  const [active, setActive] = useState(3); // Center video

  const prev = () => setActive((prev) => (prev - 1 + videos.length) % videos.length);
  const next = () => setActive((prev) => (prev + 1) % videos.length);

  return (
    <section
      id="portfolio-preview"
      className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-indigo-800 via-violet-800 via-purple-800 to-fuchsia-800"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg">
        Portfolio Preview
      </h2>
      {/* 3D Video Carousel */}
      <div className="relative w-full max-w-4xl h-[340px] perspective-[1200px] mx-auto flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
          aria-label="Previous"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="w-full h-full flex items-center justify-center relative" style={{ perspective: "1200px" }}>
          {videos.map((video, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-56 h-80 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out flex flex-col items-center"
              style={getTransform(i, active, videos.length)}
            >
              <div className="w-full h-64 bg-black rounded-2xl overflow-hidden shadow-lg border-4 border-white/10 flex items-center justify-center">
                {/* Placeholder for video */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  controls={false}
                  autoPlay={false}
                  loop
                  muted
                  poster="https://placehold.co/320x400?text=Video"
                />
              </div>
              <div className="mt-3 text-white text-sm font-semibold bg-black/60 px-4 py-1 rounded-full shadow">
                {video.client}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
          aria-label="Next"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* CTA Button */}
      <a
        href="#"
        className="mt-16 inline-block px-10 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-full shadow-lg transition duration-200 text-lg"
      >
        See Full Portfolio
      </a>
    </section>
  );
};

export default PortfolioPreview;