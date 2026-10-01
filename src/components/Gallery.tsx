"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { galleryImages } from "@/data/config";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () =>
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const goNext = () =>
    setActiveIndex((i) =>
      i !== null && i < galleryImages.length - 1 ? i + 1 : i
    );

  return (
    <>
      {/* Grid: Row 1 has 3 photos (span 2 each), Rows 2 & 3 have 2 larger photos (span 3 each) */}
      <section
        className="grid grid-cols-1 md:grid-cols-6 gap-6 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
        aria-label="Polaroid photo gallery"
      >
        {galleryImages.map((image, index) => {
          const isRowOne = index < 3;
          const colSpanClass = isRowOne ? "md:col-span-2" : "md:col-span-3";

          return (
            <div
              key={image.src}
              id={`gallery-item-${index + 1}`}
              className={`
                ${colSpanClass}
                group relative cursor-pointer
                overflow-hidden
                transition-transform duration-300 ease-out
                hover:-translate-y-0.5
              `}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(index);
              }}
            >
              {/* Dark card frame */}
              <div className="border border-neutral-800 bg-[#111111] p-0.5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={848}
                  height={1264}
                  priority={isRowOne}
                  className="
                    w-full h-auto object-contain
                    transition-opacity duration-300
                    group-hover:opacity-90
                  "
                  sizes={
                    isRowOne
                      ? "(max-width: 768px) 100vw, 33vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                />
              </div>

              {/* Caption — always visible below image, bg overlay on hover only */}
              <div className="relative">
                {/* Hover bg overlay */}
                <div className="
                  absolute inset-0
                  bg-black/60 backdrop-blur-sm
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  pointer-events-none
                " />
                {/* Text — always shown, brightens on hover */}
                <div className="relative py-2 px-3">
                  <p className="text-[9px] tracking-[0.2em] uppercase font-light
                    text-neutral-400 group-hover:text-white
                    transition-colors duration-200">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          src={galleryImages[activeIndex].src}
          alt={galleryImages[activeIndex].alt}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < galleryImages.length - 1}
        />
      )}
    </>
  );
}
