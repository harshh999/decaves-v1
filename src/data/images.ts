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
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "diqslwugu";
  return `https://res.cloudinary.com/${cloudName}/image/upload/${toPublicId(localPath)}`;
}