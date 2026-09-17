"use client";

import CloudinaryImage from "./CloudinaryImage";

interface NonHeroProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function NonHeroProjectImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  fill = true,
  priority = false,
  sizes = "100vw",
}: NonHeroProjectImageProps) {
  return (
    <div
      className={`non-hero-image-wrapper relative overflow-hidden rounded-[16px] ${className}`}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        transform: "translateZ(0)",
      }}
    >
      {src.startsWith("http") ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover object-center rounded-[16px] ${imageClassName}`}
          style={{ borderRadius: "16px" }}
          loading={priority ? "eager" : "lazy"}
        />
      ) : (
        <CloudinaryImage
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          className={`w-full h-full object-cover object-center rounded-[16px] ${imageClassName}`}
          style={{ borderRadius: "16px" }}
        />
      )}
    </div>
  );
}
