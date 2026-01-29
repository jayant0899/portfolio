import { AchievementsSection } from "@/components/achievements";
import { Architecture } from "@/components/architecture";
import { ContactSection } from "@/components/contact";
import { Profile } from "@/components/profile";
import { ProjectShowcase } from "@/components/projects";
import { ExecutiveSummary } from "@/components/summary";
import { SkillSection } from "@/components/skills";
import { ExperienceSection } from "@/components/experience";
import { Overview } from "@/components/overview";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Profile />
      <Overview />
      <Architecture />
      <ExperienceSection />
      <ProjectShowcase />
      <SkillSection />
      <AchievementsSection />
      <ExecutiveSummary />
      <ContactSection />
    </main>
  );
}
