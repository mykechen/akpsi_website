import type { Metadata } from "next";
import MembersHero from "@/components/members/MembersHero";
import ExecutiveBoardFull from "@/components/members/ExecutiveBoardFull";
import ActiveMembers from "@/components/members/ActiveMembers";
import AlumniSpotlight from "@/components/members/AlumniSpotlight";

export const metadata: Metadata = {
  title: "Members | Alpha Kappa Psi USC",
  description:
    "Meet the talented brothers of Alpha Kappa Psi - from our executive board to active members and distinguished alumni.",
};

export default function MembersPage() {
  return (
    <>
      <MembersHero />
      <ExecutiveBoardFull />
      <ActiveMembers />
      <AlumniSpotlight />
    </>
  );
}
