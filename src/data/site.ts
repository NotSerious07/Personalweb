export const siteConfig = {
  brand: "NOT SERIOUS PRODUCTIONS",
  displayName: "Not Serious",
  founder: "Navneeth",
  title: "Graphic Designer & Video Creator (Beginner)",
  tagline: "Creating visuals. Building stories.",
  taglineSupport:
    "Graphic design and promotional video creation with a focus on modern visual storytelling.",
  introduction:
    "Hi! I'm Navneeth, aka Not Serious. I'm a beginner in the freelancing industry and would love to take up opportunities to improve my skills while providing professional creative assistance in marketing, particularly through promotional videos and graphic posters.",
  shortIntro:
    "A beginner creative focused on promotional graphics and videos — learning by making, and taking on opportunities with care and attention to detail.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  social: {
    instagram: {
      label: "Instagram",
      handle: "@notseriousatlife",
      href: "https://www.instagram.com/notseriousatlife/",
    },
    discord: {
      label: "Discord",
      handle: "Navneeth (Not Serious)",
      href: "https://discordapp.com/users/896355840829825064",
    },
    whatsapp: {
      label: "WhatsApp",
      handle: "Message on WhatsApp",
      href: "https://wa.me/9113667589",
    },
    email: {
      label: "Email",
      handle: "navneethprakashblr@gmail.com",
      href: "mailto:navneethprakashblr@gmail.com",
    },
  },
  tools: [
    {
      name: "Adobe Express Premium",
      note: "Quick promotional graphics, layouts, and branded social assets.",
    },
    {
      name: "DaVinci Resolve",
      note: "Video editing, pacing, cuts, and basic colour work for promos.",
    },
    {
      name: "Photopea",
      note: "Image editing and design adjustments in a flexible browser workflow.",
    },
  ],
  skills: [
    "Graphic design",
    "Typography",
    "Colour theory",
    "Visual composition",
    "Video editing",
    "Product presentation",
    "Visual storytelling",
  ],
  url: "https://notserious.productions",
} as const;

export type SiteConfig = typeof siteConfig;
