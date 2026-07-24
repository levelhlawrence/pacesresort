import React, { useMemo, useState } from "react";
import ImageCarousel from "../Components/ImageCarousel";
import { HiOutlineZoomIn } from "react-icons/hi";

const Gallery = ({ galleryImgData }) => {
  const [imgState, setImgState] = useState("villa");
  const [isRendered, setIsRendered] = useState(false);
  const [carouselItems, setCarouselItems] = useState({});

  const filteredImages = useMemo(
    () => galleryImgData.filter((img) => img.type === imgState),
    [galleryImgData, imgState],
  );

  const categories = [
    { key: "villa", label: "Villas" },
    { key: "room", label: "Rooms" },
    { key: "surroundings", label: "Surroundings" },
  ];

  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Gallery
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            A more intimate look at the retreat.
          </h2>
        </div>
        <div
          className="flex flex-wrap gap-3"
          role="tablist"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={imgState === category.key}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                imgState === category.key
                  ? "bg-amber-400 text-slate-950"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
              onClick={() => setImgState(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filteredImages.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setCarouselItems({ item, index });
              setIsRendered(true);
            }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
          >
            <img
              src={item.img}
              alt={`${imgState} view ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur">
              <HiOutlineZoomIn size={16} />
            </span>
          </button>
        ))}
      </div>

      {isRendered && (
        <ImageCarousel
          allImages={filteredImages}
          image={carouselItems}
          setIsRendered={setIsRendered}
        />
      )}
    </section>
  );
};

export default Gallery;
