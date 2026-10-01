"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${alt}`}
    >
      {/* Close button */}
      <button
        id="lightbox-close"
        onClick={onClose}
        className="absolute top-5 right-6 text-white/70 hover:text-white transition-colors duration-200 text-3xl font-thin leading-none z-10"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          id="lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 text-4xl font-thin z-10 p-2"
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          id="lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 text-4xl font-thin z-10 p-2"
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-h-[90vh] max-w-[90vw] md:max-w-[60vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1200}
          className="object-contain max-h-[90vh] w-auto h-auto"
          priority
        />
        <p className="text-white/40 text-xs tracking-widest uppercase mt-3 text-center font-light">
          {alt}
        </p>
      </div>
    </div>
  );
}
