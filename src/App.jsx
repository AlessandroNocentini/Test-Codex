import { useEffect } from "react";
import { profile } from "./data/profile.js";

const sectionLinks = [
  ["about", "About"],
  ["experience", "Work"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.identity.name} home`}>
        <span className="brand-mark">{profile.identity.initials}</span>
        <span className="brand-text">{profile.identity.name}</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {sectionLinks.map(([href, label]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="grid-plane" />
      </div>

      <div className="section-shell hero-layout">
        <div className="hero-copy reveal-on-scroll">
          <p className="eyebrow">{profile.identity.location}</p>
          <h1>{profile.identity.name}</h1>
          <p className="hero-role">{profile.identity.headline}</p>
          <p className="hero-intro">{profile.identity.intro}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#projects">
              Explore work
            </a>
            {profile.cv.available ? (
              <a className="button button-secondary" href={profile.cv.href} download>
                {profile.cv.label}
              </a>
            ) : (
              <span className="button button-secondary button-disabled" aria-disabled="true">
                CV coming soon
              </span>
            )}
          </div>
        </div>

        <div className="hero-visual reveal-on-scroll" aria-label="Profile highlights">
          <div className="portrait-card">
            <span className="portrait-initials">{profile.identity.initials}</span>
            <span className="portrait-ring" />
          </div>
          <div className="signal-card signal-card-top">
            <span>Research vector</span>
            <strong>AI / Control / Robotics</strong>
          </div>
          <div className="signal-card signal-card-bottom">
            <span>Current base</span>
            <strong>Milan, Italy</strong>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div>
          {profile.focusAreas.concat(profile.focusAreas).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="section-shell metrics-strip reveal-on-scroll" aria-label="Profile metrics">
      {profile.metrics.map((metric) => (
        <article key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
    </section>
  );
}

function About() {
  return (
    <Section id="about" number="01" kicker="About" title="Engineering with a wide-angle lens">
      <div className="about-editorial">
        <p className="lead-copy">{profile.about[0]}</p>
        <div className="about-columns">
          {profile.about.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" number="02" kicker="Experience" title="Research, systems, and applied impact">
      <div className="timeline">
        {profile.experience.map((role) => (
          <article className="timeline-item reveal-on-scroll" key={`${role.company}-${role.period}`}>
            <div className="timeline-side">
              <p className="item-period">{role.period}</p>
              <h3>{role.role}</h3>
              <p className="item-meta">{role.company}</p>
            </div>
            <div className="item-body">
              <p>{role.summary}</p>
              {role.bullets?.length > 0 && (
                <ul className="tag-list" aria-label={`${role.role} focus areas`}>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {role.links?.length > 0 && <InlineLinks links={role.links} />}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" number="03" kicker="Projects" title="Selected builds and experiments">
      <div className="project-showcase">
        {profile.projects.map((project, index) => (
          <article className="project-card reveal-on-scroll" key={`${project.name}-${index}`}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p className="item-period">{project.type}</p>
              <h3>{project.name}</h3>
              {project.isExample && <span className="sample-badge">Sample content</span>}
              <p>{project.summary}</p>
            </div>
            <ul className="tag-list" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.links?.length > 0 && <InlineLinks links={project.links} />}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" number="04" kicker="Skills" title="Technical range">
      <div className="skills-grid">
        {profile.skills.map((group) => (
          <article className="skill-group reveal-on-scroll" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="language-strip reveal-on-scroll" aria-label="Languages">
        {profile.languages.map((language) => (
          <span key={language.name}>
            {language.name} - {language.level}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" number="05" kicker="Education" title="Formal foundations">
      <div className="timeline compact">
        {profile.education.map((item) => (
          <article className="timeline-item reveal-on-scroll" key={`${item.school}-${item.period}`}>
            <div className="timeline-side">
              <p className="item-period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="item-meta">{item.school}</p>
            </div>
            <div className="item-body">
              <p>{item.summary}</p>
              {item.links?.length > 0 && <InlineLinks links={item.links} />}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certificates() {
  return (
    <Section id="certificates" number="06" kicker="Certificates" title="Credentials and layout samples">
      <div className="certificate-row">
        {profile.certificates.map((certificate) => (
          <article className="certificate-card reveal-on-scroll" key={`${certificate.name}-${certificate.year}`}>
            <p className="item-period">{certificate.year}</p>
            <h3>{certificate.name}</h3>
            {certificate.isExample && <span className="sample-badge">Sample content</span>}
            <p>{certificate.issuer}</p>
            <InlineLinks links={[{ label: "Credential", href: certificate.url }]} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" number="07" kicker="Contact" title="Let us shape the next system">
      <div className="contact-panel reveal-on-scroll">
        <p>{profile.contact.message}</p>
        <div className="social-links">
          {profile.socials.map((social) => (
            <a key={`${social.label}-${social.href}`} href={social.href}>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function InlineLinks({ links }) {
  return (
    <div className="inline-links">
      {links.map((link) => (
        <a key={`${link.label}-${link.href}`} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function Section({ id, number, kicker, title, children }) {
  return (
    <section className="section-shell content-section reveal-on-scroll" id={id}>
      <div className="section-heading">
        <span>{number}</span>
        <div>
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          Built by {profile.identity.name}. Update this site from{" "}
          <code>src/data/siteContent.json</code>.
        </p>
      </footer>
    </>
  );
}
