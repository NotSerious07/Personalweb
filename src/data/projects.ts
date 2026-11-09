export type ProjectCategory =
  | "Graphic Design"
  | "Video Production"
  | "Branding"
  | "Creative Campaigns";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  thumbnail: { label: string; tone: "warm" | "cool" | "neutral" | "gold" };
  /** "placeholder" = sample content until real work is added. "concept" = fictional practice project. */
  status: "placeholder" | "concept" | "real";
  objective: string;
  concept: string;
  process: string[];
  result: string;
  software: string[];
  lessons: string[];
  media: { type: "image" | "video"; label: string }[];
};

/**
 * PORTFOLIO PROJECTS — edit this file to add or replace work.
 * All entries below are clearly labeled sample placeholders / concept projects.
 * Replace them with real portfolio pieces as you complete them. Do not invent
 * client names, testimonials, or commercial results.
 */
export const projects: Project[] = [
  {
    slug: "sample-promo-poster",
    title: "Sample Promotional Poster",
    category: "Graphic Design",
    summary:
      "A placeholder poster layout exploring hierarchy, contrast, and product focus for a fictional launch.",
    thumbnail: { label: "Poster layout placeholder", tone: "gold" },
    status: "placeholder",
    objective:
      "Practice building a clear promotional poster that guides the viewer from headline to product to call-to-action.",
    concept:
      "A bold, minimal composition using restrained colour, strong type scale, and a single focal point.",
    process: [
      "Defined the message hierarchy: offer, product, and action.",
      "Sketched thumbnail layouts to test balance and whitespace.",
      "Refined typography pairing and spacing for readability.",
      "Prepared export-ready dimensions for social sharing (placeholder).",
    ],
    result:
      "A sample layout demonstrating poster structure. Replace with final artwork and real context when available.",
    software: ["Adobe Express Premium", "Photopea"],
    lessons: [
      "Clear hierarchy matters more than decorative elements.",
      "Whitespace can make promotional content feel more premium.",
    ],
    media: [
      { type: "image", label: "Placeholder: final poster mockup" },
      { type: "image", label: "Placeholder: layout exploration" },
    ],
  },
  {
    slug: "sample-product-reel",
    title: "Sample Product Reel",
    category: "Video Production",
    summary:
      "A placeholder short-form edit concept focused on pacing, captions, and product reveal beats.",
    thumbnail: { label: "Video frame placeholder", tone: "cool" },
    status: "placeholder",
    objective:
      "Explore how short promotional edits can present a product clearly within a few seconds.",
    concept:
      "Tight cuts, readable on-screen text, and a simple reveal structure suited to social feeds.",
    process: [
      "Outlined a three-beat structure: hook, detail, close.",
      "Planned shot placeholders and caption timing.",
      "Practised basic cuts and rhythm in the editor (placeholder).",
      "Reviewed readability on a small-screen frame (placeholder).",
    ],
    result:
      "A sample edit plan and placeholder frames. Replace with an exported reel and project notes when available.",
    software: ["DaVinci Resolve"],
    lessons: [
      "Pacing and legibility are critical for short-form video.",
      "Simple structure helps a message land quickly.",
    ],
    media: [
      { type: "video", label: "Placeholder: 9:16 reel preview" },
      { type: "image", label: "Placeholder: storyboard frame" },
    ],
  },
  {
    slug: "concept-visual-identity",
    title: "Concept Visual Identity",
    category: "Branding",
    summary:
      "A personal concept project exploring a small identity system — colour, type, and applied mockups.",
    thumbnail: { label: "Identity concept placeholder", tone: "neutral" },
    status: "concept",
    objective:
      "Practice building a consistent visual direction across a few simple brand touchpoints.",
    concept:
      "A restrained palette and modern typography applied to sample social and poster formats.",
    process: [
      "Selected a limited colour palette and type roles.",
      "Created sample applications to test consistency (concept).",
      "Checked contrast and spacing across formats.",
      "Documented decisions for future refinement.",
    ],
    result:
      "A concept identity study. Clearly labelled as a personal practice project, not client work.",
    software: ["Adobe Express Premium", "Photopea"],
    lessons: [
      "Consistency across touchpoints builds recognition.",
      "Constraints can make design decisions clearer.",
    ],
    media: [
      { type: "image", label: "Placeholder: palette and type sheet" },
      { type: "image", label: "Placeholder: applied mockup" },
    ],
  },
  {
    slug: "concept-launch-campaign",
    title: "Concept Launch Campaign",
    category: "Creative Campaigns",
    summary:
      "A personal concept combining poster and short-video ideas into one coordinated campaign direction.",
    thumbnail: { label: "Campaign concept placeholder", tone: "warm" },
    status: "concept",
    objective:
      "Practice keeping visual language consistent across static and motion formats for a fictional launch.",
    concept:
      "Shared colours, typography, and messaging adapted to a poster and a short promo clip.",
    process: [
      "Defined a single campaign message and audience (fictional).",
      "Designed a poster direction and matching motion frames (concept).",
      "Aligned tone, pacing, and visual details across formats.",
      "Noted what would need real assets and feedback to finish.",
    ],
    result:
      "A coordinated concept package. Clearly labelled as personal practice, not commercial campaign work.",
    software: ["Adobe Express Premium", "DaVinci Resolve", "Photopea"],
    lessons: [
      "Campaigns work best when formats share a clear system.",
      "Planning assets early makes cross-format work smoother.",
    ],
    media: [
      { type: "image", label: "Placeholder: campaign poster" },
      { type: "video", label: "Placeholder: campaign video concept" },
    ],
  },
];

export const categories = [
  "All Projects",
  "Graphic Design",
  "Video Production",
  "Branding",
  "Creative Campaigns",
] as const;

export type CategoryFilter = (typeof categories)[number];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
