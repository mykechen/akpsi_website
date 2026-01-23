import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhatYouWillGet from "@/components/home/WhatYouWillGet";
import CompanyCarousel from "@/components/home/CompanyCarousel";
import ExecutiveBoard from "@/components/home/ExecutiveBoard";
import BentoPhotoGrid from "@/components/home/BentoPhotoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatYouWillGet />
      <CompanyCarousel />
      <BentoPhotoGrid />
      <ExecutiveBoard />
    </>
  );
}
