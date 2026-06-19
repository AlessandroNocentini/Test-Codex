import { profile } from "./data/profile.js";

const sectionLinks = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.identity.name} home`}>
        <span className="brand-mark">{profile.identity.initials}</span>
        <span>{profile.identity.name}</span>
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
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{profile.identity.location}</p>
        <h1>{profile.identity.headline}</h1>
        <p className="hero-intro">{profile.identity.intro}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View work
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
      <div className="hero-panel" aria-label="Profile highlights">
        <p className="panel-kicker">Portfolio focus</p>
        <ul>
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="About" title="A sharp personal snapshot">
      <div className="about-grid">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Selected professional path">
      <div className="timeline">
        {profile.experience.map((role) => (
          <article className="timeline-item" key={`${role.company}-${role.period}`}>
            <div>
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
    <Section id="projects" kicker="Projects" title="Work worth opening">
      <div className="card-grid">
        {profile.projects.map((project) => (
          <article className="project-card" key={project.name}>
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
    <Section id="skills" kicker="Skills" title="Tools, strengths, and working range">
      <div className="skills-grid">
        {profile.skills.map((group) => (
          <article className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="language-strip" aria-label="Languages">
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
    <Section id="education" kicker="Education" title="Learning record">
      <div className="timeline compact">
        {profile.education.map((item) => (
          <article className="timeline-item" key={`${item.school}-${item.period}`}>
            <div>
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
    <Section id="certificates" kicker="Certificates" title="Credentials and examples">
      <div className="card-grid">
        {profile.certificates.map((certificate) => (
          <article className="project-card" key={`${certificate.name}-${certificate.year}`}>
            <div>
              <p className="item-period">{certificate.year}</p>
              <h3>{certificate.name}</h3>
              {certificate.isExample && <span className="sample-badge">Sample content</span>}
              <p>{certificate.issuer}</p>
            </div>
            <InlineLinks links={[{ label: "Credential", href: certificate.url }]} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Let us build the next thing">
      <div className="contact-panel">
        <p>{profile.contact.message}</p>
        <div className="social-links">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href}>
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

function Section({ id, kicker, title, children }) {
  return (
    <section className="section-shell content-section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
