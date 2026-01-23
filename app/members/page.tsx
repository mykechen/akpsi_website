import type { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";
import PhotoGallery from "@/components/members/PhotoGallery";
import ExecutiveBoardFull from "@/components/members/ExecutiveBoardFull";
import ActiveMembers from "@/components/members/ActiveMembers";
import AlumniSpotlight from "@/components/members/AlumniSpotlight";

export const metadata: Metadata = {
  title: "Members | Alpha Zeta USC",
  description:
    "Meet the talented brothers of Alpha Zeta - from our executive board to active members and distinguished alumni.",
};

export default function MembersPage() {
  return (
    <>
      <MembersHero />
      <PhotoGallery />
      <ExecutiveBoardFull />
      <ActiveMembers />
      <AlumniSpotlight />
    </>
  );
}
