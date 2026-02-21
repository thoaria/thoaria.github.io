import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TooltipTemplate from "./TooltipTemplate.tsx";
import SkillsPage from "./SkillsPage.tsx";

import pet1 from "../assets/pet_1.png";
import pet2 from "../assets/pet_2.png";
import pet3 from "../assets/pet_3.png";
import niam1 from "../assets/niam_1.png";
import niam2 from "../assets/niam_2.png";
import niam3 from "../assets/niam_3.png";
import wsvDark1 from "../assets/wsv_dark_1.png";
import wsvLight1 from "../assets/wsv_light_1.png";
import wsvDark2 from "../assets/wsv_dark_2.png";
import chronlineHomepage from "../assets/chronline_homepage.png";
import chronlineDashboard from "../assets/chronline_dashboard.png";
import chronlineFeed from "../assets/chronline_feed.png";

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.pdf";
import open from "../assets/open-in-new.png";
import messsage from "../assets/message.png";

export default function TabContent({ activeTab }: { activeTab: string }) {
    // Guest book form state
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [guestDay, setGuestDay] = useState("");
    const [guestReason, setGuestReason] = useState("");
    const [guestAbout, setGuestAbout] = useState("");

    // Google Form details
    const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSc26csiTanr12pLSHBWW2QeMltpNPiJFN3gOjvbYpVuvBwLeA/formResponse";
    const entryName = "entry.2072685040";
    const entryEmail = "entry.729664409";
    const entryDay = "entry.1658929030";
    const entryReason = "entry.947642351";
    const entryAbout = "entry.1048560163";

    function handleGuestBookSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      // Build form data
      const formData = new FormData();
      formData.append(entryName, guestName);
      formData.append(entryEmail, guestEmail);
      formData.append(entryDay, guestDay);
      formData.append(entryReason, guestReason);
      formData.append(entryAbout, guestAbout);
      // Submit to Google Form in a new tab
      const params = new URLSearchParams();
      params.append(entryName, guestName);
      params.append(entryEmail, guestEmail);
      params.append(entryDay, guestDay);
      params.append(entryReason, guestReason);
      params.append(entryAbout, guestAbout);
      window.open(`${googleFormAction}?${params.toString()}`, "_blank");
      // Clear fields
      setGuestName("");
      setGuestEmail("");
      setGuestDay("");
      setGuestReason("");
      setGuestAbout("");
    }
  const [displayTab, setDisplayTab] = useState(activeTab);
  const [fade, setFade] = useState(true);
  const email = "augustinacostanza@gmail.com";

  const education = [
    // {
    //   title: 'BS Computer Science & Engineering',
    //   organization: 'University at Buffalo – SUNY',
    //   date: 'May 2024',
    //   description: 'GPA: 3.6/4.0',
    //   tag: 'Undergraduate'
    // },
    {
      title: 'MS Computer Science & Engineering',
      organization: 'University at Buffalo – SUNY',
      date: 'Feb 2026',
      description: 'GPA: 3.3/4.0',
      tag: 'Graduate'
    }
  ];

  const experience = [
    {
      title: 'ACCESS MMS Team Intern',
      organization: 'University at Buffalo Center for Computational Research',
      date: 'May 2023-Aug 2023',
      description: 'Converted ETL V1 ingestors in PHP to JSON files utilizing PostgreSQL. Added files to a pipeline file and ran it to verify correctness.',
      tag: 'Internship, Research'
    },
    {
      title: 'Frontend Development Team Intern',
      organization: 'Newsday',
      date: 'Jun 2024-Aug 2024, Jun 2025-Aug 2025',
      description: 'Designed Figma prototypes of pages for development. Worked on assigned tickets for frontend modifications.',
      tag: 'Internship, Frontend'
    },
    {
      title: 'Project Manager',
      organization: 'CSE404/442, University at Buffalo',
      date: '2024',
      description: 'Managed teams of students for software engineering projects. Responsible for project planning, task delegation, and ensuring timely completion of milestones.',
      tag: 'Leadership, Management'
    },
    {
      title: 'Teaching Assistant, CSE312 Web Applications',
      organization: 'University at Buffalo',
      date: '2023–2026',
      description: 'Assisted in teaching web application development, grading assignments, and providing support to students.',
      tag: 'Teaching, Full Stack'
    }
  ];

  useEffect(() => {
    setFade(false);

    const timeout = setTimeout(() => {
      setDisplayTab(activeTab);
      setFade(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab]);

    // State to track which project modal is open
    const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(null);
    const [openImage, setOpenImage] = useState<string | null>(null);

    const projectData = [
      {
        title: (
          <b style={{ textDecoration: "underline", color: '#a05580' }}>
            Milanote Clone / Storyboarding App (In Development)
          </b>
        ),
        description: (
          <span>
            A web-based storyboarding and note-taking application inspired by MilaNote. Built with <span style={{ textDecoration: 'underline', color: '#a05580' }}>React, Vite, and TailwindCSS</span>, this app will allow users to create and organize storyboards for their creative projects. Features include a flexible canvas for arranging images and notes, support for various media types, and a clean, intuitive interface. <span style={{ textDecoration: 'underline', color: '#a05580' }}>This project is currently in development</span>.
          </span>
        ),
        images: []
      },
      {
        title: (
          <b style={{ textDecoration: "underline", color: '#a05580' }}>
            Untitled Desktop Pet / Productivity App (In Development)
          </b>
        ),
        description: (
          <span>
            A desktop application that brings a virtual pet to your computer. Built with <span style={{ textDecoration: 'underline', color: '#a05580' }}>Tauri, React, Vite, and Rust</span>, this app will allow users to choose from a variety of pixel art pets that will roam around their desktop, interact with the user, and provide companionship throughout the day. The app will feature customizable pets, interactive animations, and a simple care system to keep your virtual friend happy and healthy. Productivity is tracked, granting the active pet "experience points" so it may "level up". <span style={{ textDecoration: 'underline', color: '#a05580' }}>This project is currently in development</span>, and I plan to release it as an open-source project on GitHub once it's ready. Stay tuned for updates!
          </span>
        ),
        images: [pet1, pet2, pet3]
      },
      {
        title: (
          <b style={{ textDecoration: "underline", color: '#a05580' }}>
            Niagara Aerospace Museum Scavenger Hunt App (2025)
          </b>
        ),
        description: (
          <span>
            A mobile app created for the Niagara Aerospace Museum to enhance visitor engagement. The app features a scavenger hunt that guides users through the museum's exhibits, providing educational content and interactive challenges through the use of <span style={{ textDecoration: 'underline', color: '#a05580' }}>near field communication (NFC)</span>. Built with <span style={{ textDecoration: 'underline', color: '#a05580' }}>React Native, Expo, and MySQL</span>, it offers a seamless experience on both iOS and Android devices. As this was my master's project, a full write-up can be found <a href="https://cse.buffalo.edu/tech-reports/2025-25.pdf" target="_blank" rel="noopener noreferrer">here</a>.
          </span>
        ),
        images: [niam1, niam2, niam3]
      },
      {
        title: (
          <b style={{ textDecoration: "underline", color: '#a05580' }}>
            WebSocket Visualizer (2024)
          </b>
        ),
        description: (
          <span>
            A tool for visualizing the structure of WebSocket frames. This was a teaching tool I built for CSE312 Web Applications. It uses <span style={{ textDecoration: 'underline', color: '#a05580' }}>React + TypeScript, Vite, & TailwindCSS</span>. It can be viewed <a href="https://websocket-visualizer.vercel.app" target="_blank" rel="noopener noreferrer">here</a>.
          </span>
        ),
        images: [wsvDark1, wsvLight1, wsvDark2]
      },
      {
        title: (
          <b style={{ textDecoration: "underline", color: '#a05580' }}>
            "Chronline" (2023)
          </b>
        ),
        description: (
          <span>
            A Media Tracker App created for my senior capstone for undergrad. Built with <span style={{ textDecoration: 'underline', color: '#a05580' }}>React and Node.js</span>. Features include tracking movies, TV shows, books, and video games, with personalized recommendations and a social feed for sharing reviews and ratings.
          </span>
        ),
        images: [chronlineHomepage, chronlineDashboard, chronlineFeed]
      }
    ];


    return (
      <div
        className={`page-content ${fade ? "fade-in" : "fade-out"}`}
      >

        {displayTab === "projects" && (
          <div className="projects-section">
            <h3 style={{ textAlign: 'center' }}>Projects</h3>
            {projectData.map((proj, idx) => (
              <div key={idx} className="project-list-item">
                <div className="popup-button">
                  <button onClick={() => setOpenProjectIdx(idx)}>
                    <span style={{ flex: 1 }}>{proj.title}</span>
                    <span className="project-list-icon"></span>
                  </button>
                </div>
              </div>
            ))}

            {/* popup modal rendered in portal to avoid clipping */}
            {openProjectIdx !== null && typeof window !== 'undefined' && createPortal(
              <div className="project-popup-modal" onClick={() => setOpenProjectIdx(null)}>
                <div className="project-popup-content" onClick={e => e.stopPropagation()}>
                  <button className="project-popup-close" onClick={() => setOpenProjectIdx(null)} aria-label="Close">×</button>
                  <div className="project-popup-title">{projectData[openProjectIdx].title}</div>
                  <div className="project-popup-description">{projectData[openProjectIdx].description}</div>
                  {projectData[openProjectIdx].images && projectData[openProjectIdx].images.length > 0 && (
                    <div className="project-popup-images">
                      {projectData[openProjectIdx].images.slice(0, 3).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Project example ${i + 1}`}
                          className="project-popup-image"
                          onClick={() => setOpenImage(img)}
                        />
                      ))}
                    </div>
                  )}
                        {/* Image popup modal */}
                        {openImage && typeof window !== 'undefined' && createPortal(
                          <div className="image-popup-modal" onClick={() => setOpenImage(null)}>
                            <div className="image-popup-content" onClick={e => e.stopPropagation()}>
                              <img
                                src={openImage}
                                alt="Project large preview"
                                className="image-popup-img"
                              />
                            </div>
                          </div>,
                          document.body
                        )}
                </div>
              </div>,
              document.body
            )}
          </div>
        )}

        {displayTab === "skills" && (
          <>
            <h3 className="skills-section-title">Skills</h3>
            <SkillsPage />
          </>
        )}

        {displayTab === "education" && (
          <>
            <h3 style={{ textAlign: 'center' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', width: '100%' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="experience-entry">
                  <div className="experience-title">{edu.title}</div>
                  <div className="experience-organization">
                    {edu.organization} &mdash; <span className="experience-date">{edu.date}</span>
                  </div>
                  <hr className="experience-divider" />
                  <div className="experience-description">{edu.description}</div>
                  <div style={{ bottom: 6, right: 10, display: 'flex', gap: 6 }}>
                    {edu.tag.split(',').map((t, i) => (
                      <span key={i} className="experience-tag">{t.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {displayTab === "experience" && (
          <>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'center', verticalAlign: 'middle', color: '#a05580', fontSize: '14px' }}>Experience</div>
            <TooltipTemplate content="Click to view resume">
                <img src={open} alt="Open in new" style={{ width: '30px', height: 'auto', cursor: 'pointer' }} onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')} />
            </TooltipTemplate>
          </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', width: '100%' }}>
              {experience.map((exp, idx) => (
                <div key={idx} className="experience-entry">
                  <div className="experience-title">{exp.title}</div>
                  <div className="experience-organization">
                    {exp.organization} &mdash; <span className="experience-date">{exp.date}</span>
                  </div>
                  <hr className="experience-divider" />
                  <div className="experience-description">{exp.description}</div>
                  <div style={{ bottom: 6, right: 10, display: 'flex', gap: 6 }}>
                    {exp.tag.split(',').map((t, i) => (
                      <span key={i} className="experience-tag">{t.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {displayTab === "contact" && (
          <>
            <h3>Contact</h3>
            <div className="contact-section">
              <div className="contact-links">
                <a
                  href="https://github.com/thoaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipTemplate content="GitHub">
                    <img src={github} alt="GitHub" className="contact-icon" />
                  </TooltipTemplate>
                </a>
                <span className="contact-link-separator">|</span>
                <a
                  href="https://www.linkedin.com/in/augustina-costanza-6004a5260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipTemplate content="LinkedIn">
                    <img src={linkedin} alt="LinkedIn" className="contact-icon" />
                  </TooltipTemplate>
                </a>
                <span className="contact-link-separator">|</span>
                <span
                  style={{ position: 'relative', display: 'inline-block' }}
                  onClick={async () => {
                    await navigator.clipboard.writeText(email);
                    const notif = document.createElement('div');
                    notif.textContent = 'Email copied!';
                    notif.style.position = 'fixed';
                    notif.style.bottom = '32px';
                    notif.style.left = '50%';
                    notif.style.transform = 'translateX(-50%)';
                    notif.style.background = '#fff0f8';
                    notif.style.color = '#a05580';
                    notif.style.border = '2px solid #eaa4c8';
                    notif.style.borderRadius = '12px';
                    notif.style.padding = '10px 24px';
                    notif.style.fontSize = '12px';
                    notif.style.fontWeight = '700';
                    notif.style.boxShadow = '0 2px 8px rgba(216,139,179,0.07)';
                    notif.style.zIndex = '9999';
                    document.body.appendChild(notif);
                    setTimeout(() => {
                      notif.remove();
                    }, 1600);
                  }}
                >
                  <TooltipTemplate content={email}>
                    <img src={messsage} alt="Email" className="contact-icon" />
                  </TooltipTemplate>
                </span>
                <span className="contact-link-separator">|</span>
                <TooltipTemplate content="Resume">
                  <img
                    src={open}
                    alt="Resume"
                    className="contact-icon"
                    onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')}
                  />
                </TooltipTemplate>
              </div>
              <hr className="experience-divider" style={{ margin: '32px auto', width: '320px' }} />
              <div className="guest-book-section" style={{ textAlign: 'center', width: '300px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <div style={{ textAlign: 'center', verticalAlign: 'middle', color: '#a05580', fontSize: '14px' }}>Guest Book</div>
                    <a
                        href="https://docs.google.com/spreadsheets/d/1wbyxLfTH6fNdQjtg0RTbSxGBTpuPW4z14mwndoCfymo/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TooltipTemplate content="Click to view guest book entries">
                            <img src={open} alt="Open in new" style={{ width: '30px', height: 'auto', cursor: 'pointer' }} />
                        </TooltipTemplate>
                    </a>
                </div>
                <p>Leave a message!</p>
                <form
                  onSubmit={handleGuestBookSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}
                >
                  <input
                    name={entryName}
                    type="text"
                    placeholder="Name"
                    required
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className="guestbook-input"
                  />
                  <input
                    name={entryEmail}
                    type="email"
                    placeholder="Email (optional)"
                    value={guestEmail}
                    onChange={e => setGuestEmail(e.target.value)}
                    className="guestbook-input"
                  />
                  <textarea
                    name={entryDay}
                    placeholder="Tell me about your day."
                    required
                    rows={4}
                    value={guestDay}
                    onChange={e => setGuestDay(e.target.value)}
                    className="guestbook-input"
                  />
                  <textarea
                    name={entryReason}
                    placeholder="What brings you here?"
                    required
                    rows={4}
                    value={guestReason}
                    onChange={e => setGuestReason(e.target.value)}
                    className="guestbook-input"
                  />
                  <textarea
                    name={entryAbout}
                    placeholder="Tell me something about yourself."
                    rows={4}
                    value={guestAbout}
                    onChange={e => setGuestAbout(e.target.value)}
                    className="guestbook-input"
                  />
                  <button
                    type="submit"
                    style={{ background: '#f79ac7', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
    </div>
  );
}
