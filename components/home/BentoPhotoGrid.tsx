"use client";

import Image from "next/image";
import photos from "@/data/photos.json";
import type { Photo } from "@/types";

const photosData = photos as Photo[];

export default function BentoPhotoGrid() {
  // Split photos into two rows
  const topRowPhotos = photosData.slice(0, Math.ceil(photosData.length / 2));
  const bottomRowPhotos = photosData.slice(Math.ceil(photosData.length / 2));

  // Duplicate photos for seamless infinite scroll
  const topRowDuplicated = [...topRowPhotos, ...topRowPhotos];
  const bottomRowDuplicated = [...bottomRowPhotos, ...bottomRowPhotos];

  return (
    <section className="py-16 md:py-24 bg-primary-light/30 overflow-hidden">
      {/* Top row - scrolls right */}
      <div className="w-full overflow-hidden mb-4">
        <div className="flex animate-scroll-right">
          {topRowDuplicated.map((photo, index) => (
            <div
              key={`top-${photo.id}-${index}`}
              className="relative w-64 h-48 shrink-0 mx-2 rounded-xl overflow-hidden"
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
              className="relative w-64 h-48 shrink-0 mx-2 rounded-xl overflow-hidden"
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
