"use client";

import { useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import ImageLightbox from "./ImageLightbox";

interface Props {
  images: string[];
}

export default function ProjectInterior({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => open(i)}
            className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-brown-deep/5"
          >
            {src.startsWith("http") ? (
              <img
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <CloudinaryImage
                src={src}
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/35 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-brown-deep/0 transition-colors duration-500 group-hover:bg-brown-deep/10" />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
          onSelect={setLightboxIndex}
        />
      )}
    </>
  );
}
