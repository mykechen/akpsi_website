"use client";

import Image from "next/image";

// Generate photo data from gallery images
const galleryImages = Array.from({ length: 27 }, (_, i) => ({
  id: String(i + 1),
  src: `/images/gallery/img${i + 1}.png`,
  caption: `Gallery Image ${i + 1}`,
}));

export default function BentoPhotoGrid() {
  const topRowPhotos = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
  const bottomRowPhotos = galleryImages.slice(Math.ceil(galleryImages.length / 2));

  const topRowDuplicated = [...topRowPhotos, ...topRowPhotos];
  const bottomRowDuplicated = [...bottomRowPhotos, ...bottomRowPhotos];

  return (
    <section className="py-16 md:py-24 bg-cloud-50/50 overflow-hidden">
      {/* Top row - scrolls right */}
      <div className="w-full overflow-hidden mb-4">
        <div className="flex animate-scroll-right">
          {topRowDuplicated.map((photo, index) => (
            <div
              key={`top-${photo.id}-${index}`}
              className="relative w-72 h-52 shrink-0 mx-2 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls left */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll-left">
          {bottomRowDuplicated.map((photo, index) => (
            <div
              key={`bottom-${photo.id}-${index}`}
              className="relative w-72 h-52 shrink-0 mx-2 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
