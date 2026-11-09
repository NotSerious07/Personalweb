import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Graphic design, video production, branding, and creative campaign projects by Not Serious Productions.",
};

export default function PortfolioPage() {
  return (
    <div className="section-pad">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Work, practice, and concept studies"
            description="This gallery includes clearly labeled sample placeholders and personal concept projects until real portfolio pieces are added. Project content is managed in src/data/projects.ts for easy updates."
          />
        </Reveal>
        <div className="mt-10">
          <PortfolioGallery />
        </div>
      </div>
    </div>
  );
}
