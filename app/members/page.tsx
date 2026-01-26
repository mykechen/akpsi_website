import type { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";
import ExecutiveBoardFull from "@/components/members/ExecutiveBoardFull";
import ActiveMembers from "@/components/members/ActiveMembers";
import AlumniSpotlight from "@/components/members/AlumniSpotlight";
import CircularGallery from "@/components/ui/CircularGallery";

export const metadata: Metadata = {
  title: "Members | Alpha Zeta USC",
  description:
    "Meet the talented brothers of Alpha Zeta - from our executive board to active members and distinguished alumni.",
};

export default function MembersPage() {
  return (
    <>
      <MembersHero />
      <div className="h-[30vh] w-full overflow-visible relative z-40 mt-16">
        <CircularGallery />
      </div>
      <ExecutiveBoardFull />
      <ActiveMembers />
      <AlumniSpotlight />
    </>
  );
}
