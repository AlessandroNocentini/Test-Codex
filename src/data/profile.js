import siteContent from "./siteContent.json";

const formatPeriod = (start, end) => [start, end].filter(Boolean).join(" - ");

const normalizeLinks = (links = []) =>
  links.map((link, index) =>
    typeof link === "string"
      ? { label: index === 0 ? "Learn more" : `Link ${index + 1}`, href: link }
      : { label: link.label, href: link.url },
  );

const groupSkills = (skills = []) => {
  const groups = new Map();

  skills.forEach((skill) => {
    if (!groups.has(skill.category)) {
      groups.set(skill.category, []);
    }

    groups.get(skill.category).push(`${skill.name} · ${skill.level}`);
  });

  return Array.from(groups, ([name, items]) => ({ name, items }));
};

const stripMarkdownEmphasis = (text = "") => text.replaceAll("**", "");

export const profile = {
  identity: {
    name: siteContent.profile.name,
    initials: siteContent.profile.name
      .split(" ")
      .map((part) => part[0])
      .join(""),
    headline: siteContent.profile.headline,
    location: siteContent.profile.location,
    intro:
      siteContent.profile.bio ||
      "Automation, control, robotics, and AI research brought together with an engineering mindset and a taste for creative problem solving.",
  },
  cv: {
    available: Boolean(siteContent.cv?.url),
    label: siteContent.cv?.title || "Download CV",
    href: siteContent.cv?.url || `${import.meta.env.BASE_URL}cv.pdf`,
  },
  socials: [
    ...normalizeLinks(siteContent.profile.links),
    ...normalizeLinks(siteContent.contacts.links),
  ],
  highlights: [
    "Automation and Control Engineering",
    "AI research and applied machine learning",
    "Robotics, simulation, and embedded systems",
    "Creative technical problem solving",
  ],
  about: siteContent.about.paragraphs,
  experience: siteContent.work.map((role) => ({
    role: role.role,
    company: role.company,
    period: formatPeriod(role.start, role.end),
    domain: role.domain,
    summary: role.description,
    bullets: role.bullets,
    links: normalizeLinks(role.links),
  })),
  projects: siteContent.projects.map((project) => ({
    name: project.name,
    type: `${project.kind} ${project.type}`.trim(),
    summary: project.longDescription || project.shortDescription || project.description,
    tags: [...(project.technologies || []), ...(project.tags || [])],
    links: normalizeLinks(project.links),
    isExample:
      project.url?.includes("example.com") ||
      project.description?.toLowerCase().includes("example project") ||
      project.name === "Latency Lab",
  })),
  skills: groupSkills(siteContent.skills),
  languages: siteContent.languages,
  education: siteContent.education.map((item) => ({
    degree: `${item.degree} in ${item.field}`,
    school: item.institution,
    period: formatPeriod(item.start, item.end),
    summary: stripMarkdownEmphasis(item.thesis || item.description),
    links: normalizeLinks(item.links),
  })),
  certificates: siteContent.certificates.map((certificate) => ({
    ...certificate,
    isExample:
      certificate.name.toLowerCase().includes("fake") ||
      certificate.url.includes("example.com"),
  })),
  contact: {
    email: siteContent.contacts.email,
    message:
      "Open to professional conversations around AI research, automation, robotics, creative engineering projects, and applied innovation.",
  },
};
