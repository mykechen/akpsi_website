import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import AZ13 from "@/components/careers/AZ13";
import AZB4 from "@/components/careers/AZB4";
import AZCS from "@/components/careers/AZCS";
import AZC from "@/components/careers/AZC";
import AZPM from "@/components/careers/AZPM";
import AZMarketing from "@/components/careers/AZMarketing";
import WhatYouGet from "@/components/careers/WhatYouGet";
import WhereOurMembersWork from "@/components/careers/WhereOurMembersWork";
import Testimonials from "@/components/careers/Testimonials";

export const metadata: Metadata = {
  title: "Careers | Alpha Zeta USC",
  description:
    "Discover career development opportunities at Alpha Zeta through AZ Groups, mentorship, and alumni connections.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhatYouGet />
      <AZ13 />
      {/* <AZB4 /> */}
      <AZC />
      <AZPM />
      <AZCS />
      <AZMarketing />
      <WhereOurMembersWork />
      <Testimonials />
    </>
  );
}
