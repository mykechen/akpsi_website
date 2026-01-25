import Image from "next/image";

export default function CloudBackground() {
  return (
    <div
      className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <Image
        src="/misc/clouds.gif"
        alt=""
        fill
        className="object-cover opacity-60"
        unoptimized
        priority
      />
    </div>
  );
}
