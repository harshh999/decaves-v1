export function toPublicId(localPath: string) {
  return localPath
    .replace(/\.[A-Za-z0-9]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[/-]+|[/-]+$/g, "");
}

export function siteImage(localPath: string) {
  return toPublicId(localPath);
}

export function cldUrl(localPath: string) {
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${toPublicId(localPath)}`;
}