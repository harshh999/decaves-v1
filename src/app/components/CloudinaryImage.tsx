"use client";

import React, { forwardRef } from "react";
import { CldImage, CldImageProps } from "next-cloudinary";

const DEFAULT_CLOUD_NAME = "diqslwugu";

const CloudinaryImage = forwardRef<HTMLImageElement, any>((props, ref) => {
  const {
    src,
    alt = "",
    className = "",
    style,
    priority,
    loading,
    fetchPriority,
    fill,
    width,
    height,
    sizes,
    ...rest
  } = props;

  // Handle absolute URLs (e.g. Cloudinary HTTPS URLs) or local public paths directly
  if (
    typeof src === "string" &&
    (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/"))
  ) {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`${fill ? "absolute inset-0 h-full w-full object-cover" : ""} ${className}`}
        style={style}
        loading={priority ? "eager" : loading || "lazy"}
        fetchPriority={priority ? "high" : fetchPriority}
        width={width}
        height={height}
        {...rest}
      />
    );
  }

  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUD_NAME;

  return (
    <CldImage
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={style}
      priority={priority}
      loading={loading}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      config={{
        cloud: {
          cloudName,
        },
      }}
      {...rest}
    />
  );
});

CloudinaryImage.displayName = "CloudinaryImage";

export default CloudinaryImage;
