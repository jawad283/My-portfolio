// servicesData.js

import {
  Code2,
  Smartphone,
  Palette,
  Server,
  Gauge,
  Search,
  Megaphone,
} from "lucide-react";

// Replace icons with your own icon set if needed.
// Each service: id, icon, title, description, tags (optional), cta (optional)
const servicesData = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, accessible, and scalable web applications with modern React, Next.js, and clean architecture.",
    tags: ["React", "JavaScript", "Tailwind"],
  },

  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Crafting clean, modern interfaces with strong visual hierarchy, thoughtful spacing, and delightful micro-interactions.",
    tags: ["Figma"],
  },
  //   {
  //     id: "backend-apis",
  //     icon: Server,
  //     title: "Backend & APIs",
  //     description:
  //       "Designing robust REST and GraphQL APIs with secure auth, scalable databases, and clean service boundaries.",
  //     tags: ["Node.js", "PostgreSQL", "GraphQL"],
  //     cta: { label: "Learn more", href: "#contact" },
  //   },

  {
    id: "seo",
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Technical SEO, structured data, and analytics setup so your product gets found and you can measure what matters.",
    tags: ["SEO", "Search Console", "Google Analytics"],
  },
  {
    id: "google-ads",
    icon: "Megaphone",
    title: "Google Ads",
    description:
      "Creating and managing high-performing Google Ads campaigns to drive targeted traffic, leads, and conversions with measurable ROI.",
    tags: ["Search Ads", "Display Ads", "Remarketing"],
  },
];

export default servicesData;
