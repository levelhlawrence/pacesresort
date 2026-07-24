import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

const ImageCarousel = ({ image, allImages, setIsRendered }) => {
  const [currentIndex, setCurrentIndex] = useState(image.index ?? 0);

  const prevPhoto = () => {
    setCurrentIndex((index) => (index === 0 ? allImages.length - 1 : index - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((index) => (index === allImages.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsRendered(false);
      if (e.key === "ArrowLeft") {
        setCurrentIndex((index) => (index === 0 ? allImages.length - 1 : index - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((index) => (index === allImages.length - 1 ? 0 : index + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsRendered, allImages.length]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md sm:px-6"
      onClick={() => setIsRendered(false)}
    >
      <div
        className="w-full max-w-6xl border border-white/10 bg-slate-950/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden">
          <img
            src={allImages[currentIndex].img}
            alt={`${allImages[currentIndex].type} view`}
            className="h-[78vh] w-full object-cover"
          />

          <button
            type="button"
            onClick={() => setIsRendered(false)}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur"
            aria-label="Close gallery view"
          >
            <HiX size={22} />
          </button>

          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
            aria-label="Previous image"
          >
            <HiChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
            aria-label="Next image"
          >
            <HiChevronRight size={22} />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Featured view
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {allImages[currentIndex].type}
              </h3>
            </div>
            <span className="text-sm font-medium text-white/70">
              {currentIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
