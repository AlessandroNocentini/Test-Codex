export const profile = {
  identity: {
    name: "Alessandro Nocentini",
    initials: "AN",
    headline: "Creative technologist shaping useful digital products.",
    location: "Italy | Available for selected collaborations",
    intro:
      "A personal CV and portfolio space for presenting experience, projects, skills, and the way I approach meaningful work.",
  },
  cv: {
    available: false,
    href: `${import.meta.env.BASE_URL}cv.pdf`,
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/AlessandroNocentini",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
    },
  ],
  highlights: [
    "Product-minded engineering",
    "Clear communication",
    "Portfolio-ready case studies",
    "Continuous learning",
  ],
  about: [
    "This page is a flexible starting point for a professional profile: concise enough for recruiters, detailed enough for collaborators, and personal enough to feel distinct.",
    "Replace these paragraphs with a short biography, the problems you like solving, the environments where you do your best work, and the qualities that make your contribution memorable.",
  ],
  experience: [
    {
      role: "Current or Recent Role",
      company: "Company or Organization",
      period: "2024 - Present",
      summary:
        "Describe your responsibilities, impact, and the kinds of outcomes you helped deliver. Keep it concrete and measurable where possible.",
    },
    {
      role: "Previous Role",
      company: "Company or Organization",
      period: "2022 - 2024",
      summary:
        "Use this space to show progression: larger ownership, technical depth, leadership, client work, research, or cross-functional collaboration.",
    },
  ],
  projects: [
    {
      name: "Featured Project",
      type: "Case study",
      summary:
        "A concise description of the project, the problem it solved, your role, and why it matters.",
      tags: ["React", "UX", "Product"],
    },
    {
      name: "Technical Build",
      type: "Engineering",
      summary:
        "Highlight a system, tool, app, or experiment that demonstrates technical judgment and craft.",
      tags: ["Architecture", "Automation", "APIs"],
    },
    {
      name: "Creative Exploration",
      type: "Portfolio",
      summary:
        "Reserve space for a distinctive piece of work that shows taste, curiosity, and range.",
      tags: ["Design", "Storytelling", "Prototype"],
    },
  ],
  skills: [
    {
      name: "Engineering",
      items: ["Frontend architecture", "React applications", "APIs", "Testing"],
    },
    {
      name: "Product",
      items: ["User journeys", "Prototyping", "Requirements", "Iteration"],
    },
    {
      name: "Collaboration",
      items: ["Clear writing", "Stakeholder alignment", "Documentation", "Mentoring"],
    },
  ],
  education: [
    {
      degree: "Degree or Certification",
      school: "Institution Name",
      period: "Year - Year",
      summary:
        "Add relevant coursework, thesis work, certifications, honors, or continuing education.",
    },
  ],
  contact: {
    message:
      "Open to professional conversations, portfolio feedback, collaborations, and opportunities that benefit from thoughtful digital craft.",
  },
};
