import type { Metadata } from "next";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import RushTimeline from "@/components/recruitment/RushTimeline";
import FAQ from "@/components/recruitment/FAQ";
import WhyAZ from "@/components/recruitment/WhyAZ";
import MissionValues from "@/components/recruitment/MissionValues";
import Eligibility from "@/components/recruitment/Eligibility";
export const metadata: Metadata = {
  title: "Recruitment | Alpha Zeta USC",
  description:
    "Join Alpha Zeta - USC's premier professional business fraternity. Learn about our Spring 2026 Rush and apply today.",
};

export default function RecruitmentPage() {
  return (
    <>
      <RecruitmentHero />
      <RushTimeline />
      <WhyAZ />
      <MissionValues />
      <Eligibility />
      <FAQ />
    </>
  );
}
