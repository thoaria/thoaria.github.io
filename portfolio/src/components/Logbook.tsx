import { useState, useEffect, useRef, type SetStateAction } from "react";
import clickSoundSrc from "../assets/ff7_cursor.mp3";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
// import profile from "../assets/IMG_5520.PNG";

const tabList = [
  { id: "projects", icon: "projects" },
  { id: "skills", icon: "skills" },
  { id: "education", icon: "education" },
  { id: "experience", icon: "experience" },
  { id: "contact", icon: "contact" },
];

export default function Logbook() {
  const [activeTab, setActiveTab] = useState("projects");
  const [displayedTab, setDisplayedTab] = useState("projects");
  const [isAnimating, setIsAnimating] = useState(false);

  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickSound.current = new Audio(clickSoundSrc);
    clickSound.current.volume = 0.3;
    // Preload audio
    clickSound.current.load();
  }, []);

  useEffect(() => {
    if (activeTab !== displayedTab) {
      setIsAnimating(true);

      setTimeout(() => {
        setDisplayedTab(activeTab);
        setIsAnimating(false);
      }, 200);
    }
  }, [activeTab]);

  const handleTabChange = (id: SetStateAction<string>) => {
    if (clickSound.current) {
      clickSound.current.pause(); // Stop any playing sound
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
    setActiveTab(id);
  };

  return (
    <div className="logbook-wrapper">
        <div className="pixel-corners">
        <div className="logbook-background">
        <div className="logbook">
        <div className="pixel-corners" style={{ width: '50%'}}>
            <div className="logbook-container">
                <div className="book-left">
                <h2 className="book-title">Augustina Costanza</h2>
                    <div className="bio-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '18px', margin: '18px 0' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                        <img
                        src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                        alt="Profile"
                        className="profile-photo"
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: 16,
                          objectFit: 'cover',
                          border: '2px solid #d88bb3',
                          background: '#fff',
                          boxShadow: '0 2px 8px rgba(216,139,179,0.10)'
                        }}
                      />
                        <span style={{ fontSize: 10, color: '#a05580', lineHeight: 1.5 }}>
                            My name is Augustina Costanza, or Tina. I'm a passionate software developer with a love for creating engaging web experiences. 
                        </span>
                      </div>
                        <span style={{ fontSize: 10, color: '#a05580', lineHeight: 1.5 }}>
                            I have an appreciation for the era of the Internet that has been lost to us: the late 90s and 2000s, when websites were personal and full of character.
                        </span>
                            <div className="blurb-box">
                                While this website isn't entirely on par with modern design standards, I hope it captures some of the charm and nostalgia of that era. Thanks for visiting!
                            </div>
                        <img src="https://magneticdogz.neocities.org/dividers/pika.gif" style={{ width: '100%'}} />
                    </div>
                </div>
            </div>
            </div>
            <div className="pixel-corners" style={{ width: '50%'}}>
            <div className="logbook-container">
                <div className={`book-right ${isAnimating ? "fade-out" : "fade-in"}`}>
                  <div className="blurb-box">
                    This portfolio is built with React and Vite!
                  </div>
                  <TabContent activeTab={displayedTab} />
                </div>
            </div>
            </div>
        </div>
        {/* Preload audio element for browser compatibility */}
        <audio src={clickSoundSrc} style={{ display: "none" }} preload="auto" />
        </div>
    </div>
    <Tabs
            tabs={tabList}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
        />
    </div>
  );
}
