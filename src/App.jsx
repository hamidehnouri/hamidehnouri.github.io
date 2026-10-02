import React, { useState } from 'react';
import { profile, projects, experience, githubActivity } from './data.js';
import Avatar from './components/Avatar.jsx';
import PixelLogo from './components/PixelLogo.jsx';
import GitHubActivity, { formatDate } from './components/GitHubActivity.jsx';

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'story', label: 'My story' },
  { id: 'contact', label: 'Say hello' },
];

function ProjectDetails({ project, hidden }) {
  return (
    <article className="arc-detail" id={`arc-${project.id}`} aria-labelledby={`arc-${project.id}-title`} hidden={hidden}>
      <div className="arc-kind">{project.kind}</div>
      <h2 id={`arc-${project.id}-title`}>{project.title}</h2>
      <p>{project.description}</p>
      <div className="arc-tech" aria-label="Technologies">
        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      <details>
        <summary>Look under the hood</summary>
        <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </details>
      <a className="arc-link" href={project.url} target="_blank" rel="noopener noreferrer">VIEW CODE</a>
    </article>
  );
}

export default function App() {
  const [section, setSection] = useState('projects');
  const [projectId, setProjectId] = useState(projects[0].id);
  const [announcement, setAnnouncement] = useState('');
  const [firstName, ...lastName] = profile.name.split(' ');

  return (
    <div id="hn-arcade" aria-label={`${profile.name} retro computer portfolio`}>
      <header className="arc-hud arc-pixel">
        <div><span>Role</span>{profile.role}</div>
        <div><span>Base</span>{profile.location}</div>
        <div><span>Exploring</span>{profile.exploring}</div>
      </header>
      <section className="arc-hero" aria-labelledby="arc-name">
        <div className="arc-title-scene">
          <h1 id="arc-name" className="arc-pixel" aria-label={profile.name}>
            <span className="arc-first" aria-hidden="true">
              {[...firstName.toUpperCase()].map((letter, index) => <span key={index}>{letter}</span>)}
            </span>
            <span className="arc-last" aria-hidden="true">{lastName.join(' ').toUpperCase()}</span>
          </h1>
        </div>
        <p className="arc-tagline arc-pixel">{profile.tagline}</p>
        <p className="arc-intro">{profile.intro}<br />{profile.focus}</p>
      </section>

      <nav className="arc-menu arc-pixel" aria-label="Portfolio sections">
        {sections.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={section === item.id} aria-controls={`arc-${item.id}`}
            onClick={() => { setSection(item.id); setAnnouncement(`Showing ${item.label}`); }}>
            <span className="arc-number">0{index + 1}</span>{item.label}
          </button>
        ))}
      </nav>

      <main>
        <fieldset id="arc-projects" hidden={section !== 'projects'}>
          <legend>SELECT A PROJECT</legend>
          <div className="arc-work">
            <div className="arc-list" role="group" aria-label="Projects">
              {projects.map((project) => (
                <button key={project.id} type="button" aria-pressed={projectId === project.id} aria-controls={`arc-${project.id}`}
                  onClick={() => { setProjectId(project.id); setAnnouncement(`Showing ${project.title}`); }}>
                  <span>{project.category}</span>{project.title}
                </button>
              ))}
              <p className="arc-readout">BUILT WITH<br />React · Next.js · TypeScript</p>
            </div>
            {projects.map((project) => <ProjectDetails key={project.id} project={project} hidden={projectId !== project.id} />)}
          </div>
        </fieldset>

        <fieldset id="arc-story" hidden={section !== 'story'}>
          <legend>MY STORY</legend>
          <p className="arc-story-intro">{profile.story}</p>
          <div className="arc-story-grid">
            {experience.map((job) => (
              <article className="arc-chapter" key={job.company}>
                <div className="arc-period">{job.period} / {job.company}</div>
                <h3>{job.title}</h3><p>{job.description}</p>
              </article>
            ))}
          </div>
        </fieldset>

        <fieldset className="arc-contact" id="arc-contact" hidden={section !== 'contact'}>
          <legend>LET’S CONNECT</legend>
          <div className="arc-contact-layout">
            <Avatar />
            <div className="arc-contact-copy">
              <h2>Say hello, human.</h2>
              <p>{profile.contact}</p>
              <div className="arc-socials">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><PixelLogo brand="linkedin" /><span>LinkedIn</span></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer"><PixelLogo brand="github" /><span>GitHub</span></a>
              </div>
            </div>
          </div>
        </fieldset>
      </main>

      <GitHubActivity />
      <footer className="arc-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>GitHub snapshot · {formatDate(githubActivity.end)}</span>
      </footer>
      <div className="sr-only" aria-live="polite">{announcement}</div>
    </div>
  );
}
