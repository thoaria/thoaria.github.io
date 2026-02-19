import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SkillsPage from "./SkillsPage.tsx";

export default function TabContent({ activeTab }: { activeTab: string }) {
  const [displayTab, setDisplayTab] = useState(activeTab);
  const [fade, setFade] = useState(true);

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
        images: ['src/assets/pet_1.png', 'src/assets/pet_2.png', 'src/assets/pet_3.png']
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
        images: ['src/assets/niam_1.png', 'src/assets/niam_2.png', 'src/assets/niam_3.png']
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
        images: ['src/assets/wsv_dark_1.png', 'src/assets/wsv_light_1.png', 'src/assets/wsv_dark_2.png']
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
        images: ['src/assets/chronline_homepage.png', 'src/assets/chronline_dashboard.png', 'src/assets/chronline_feed.png']
      }
    ];


    return (
      <div
        className={`page-content ${fade ? "fade-in" : "fade-out"}`}
        style={{
          height: '100%',
          overflowY: 'auto',
          fontSize: 8.5,
          lineHeight: 1.6,
          boxSizing: 'border-box',
          paddingBottom: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >

        {displayTab === "projects" && (
          <div>
            <h3>Projects</h3>
            {projectData.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div className="popup-button">
                    <button
                    onClick={() => setOpenProjectIdx(idx)}
                    >
                    <span style={{ flex: 1 }}>{proj.title}</span>
                    <span
                        style={{
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#d88bb3',
                        userSelect: 'none',
                        }}
                    >
                    </span>
                    </button>
                </div>
              </div>
            ))}

            {/* popup modal rendered in portal to avoid clipping */}
            {openProjectIdx !== null && typeof window !== 'undefined' && createPortal(
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(248, 215, 234, 0.85)',
                  zIndex: 1000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onClick={() => setOpenProjectIdx(null)}
              >
                <div
                  style={{
                    background: '#fff0f8',
                    border: '2.5px solid #eaa4c8',
                    borderRadius: 18,
                    boxShadow: '0 8px 32px rgba(216,139,179,0.18), 0 2px 8px rgba(216,139,179,0.07)',
                    padding: '32px 32px 24px 32px',
                    minWidth: 320,
                    maxWidth: 540,
                    width: '90vw',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenProjectIdx(null)}
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 0,
                      background: 'none',
                      border: 'none',
                      color: '#d88bb3',
                      fontSize: 22,
                      cursor: 'pointer',
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#a05580', marginBottom: 12, textAlign: 'center' }}>
                    {projectData[openProjectIdx].title}
                  </div>
                  <div style={{ marginBottom: 18, color: 'black', fontSize: 10.5, textAlign: 'left', width: '100%' }}>
                    {projectData[openProjectIdx].description}
                  </div>
                  {projectData[openProjectIdx].images && projectData[openProjectIdx].images.length > 0 && (
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        gap: 12,
                        marginBottom: 6,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                      }}
                    >
                      {projectData[openProjectIdx].images.slice(0, 3).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Project example ${i + 1}`}
                          style={{
                            maxWidth: 140,
                            maxHeight: 120,
                            borderRadius: 10,
                            border: '1.5px solid #eaa4c8',
                            objectFit: 'cover',
                            background: '#fff',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s',
                          }}
                          onClick={() => setOpenImage(img)}
                        />
                      ))}
                    </div>
                  )}
                        {/* Image popup modal */}
                        {openImage && typeof window !== 'undefined' && createPortal(
                          <div
                            style={{
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              width: '100vw',
                              height: '100vh',
                              background: 'rgba(40, 0, 40, 0.65)',
                              zIndex: 2000,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'background 0.2s',
                            }}
                            onClick={() => setOpenImage(null)}
                          >
                            <div
                              style={{
                                position: 'relative',
                                background: 'none',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                              }}
                              onClick={e => e.stopPropagation()}
                            >
                              <img
                                src={openImage}
                                alt="Project large preview"
                                style={{
                                  maxWidth: '80vw',
                                  maxHeight: '80vh',
                                  borderRadius: 16,
                                  border: '2.5px solid #eaa4c8',
                                  background: '#fff',
                                  boxShadow: '0 8px 32px rgba(216,139,179,0.18)',
                                  objectFit: 'contain',
                                }}
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
                <h3>Skills</h3>
                <SkillsPage />
            </>
        )}

        {displayTab === "experience" && (
            <>
            <h3>Experience</h3>
            <p>Internships and research.</p>
            </>
        )}

        {displayTab === "contact" && (
            <>
            <h3>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p>Email: augustinacostanza@gmail.com</p>
                <div>
                <a href="https://www.linkedin.com/in/augustina-costanza-6004a5260/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <span style={{ margin: '0 8px' }}>|</span>
                <a href="https://github.com/thoaria" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                </div>
            </div>
            </>
        )}

        {displayTab === "guest book" && (
            <>
            <h3>Guest Book</h3>
            <p>Leave a message!</p>
            </>
            // use notion api to store guest book entries, or maybe just a google form for simplicity
        )}
    </div>
  );
}
