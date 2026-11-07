import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProfileSection />
      <SkillsMatrix />
      <ProjectShowcase />
      <ArchitectureSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
