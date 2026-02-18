import { useEffect, useState } from "react";

const skills = [
  "C","Go","MS Office", "MS VSCode","Java","Scala","Python",
  "HTML","CSS","JS","MySQL","PostgreSQL","Flask","Docker",
  "Figma","Rust","APIs","PHP","NodeJS","Web Dev", "Deployment",
  "Tauri","Debugging","React","React Native", "Expo",
  "Linux Command Line","OCaml",
];

// Categorize for subtle color differences
interface SkillCategoryMap {
    systems: string[];
    web: string[];
    database: string[];
    devops: string[];
}

type Skill = string;

const skillCategoryMap: SkillCategoryMap = {
    systems: ["C", "Rust", "Go", "OCaml"],
    web: ["React", "React Native + Expo", "HTML", "CSS", "JS", "NodeJS", "PHP", "Flask"],
    database: ["MySQL", "PostgreSQL"],
    devops: ["Docker", "Linux Command Line", "Web Dev", "Deployment"],
};

const getCategory = (skill: Skill): keyof SkillCategoryMap | "general" => {
    if (skillCategoryMap.systems.includes(skill)) return "systems";
    if (skillCategoryMap.web.includes(skill)) return "web";
    if (skillCategoryMap.database.includes(skill)) return "database";
    if (skillCategoryMap.devops.includes(skill)) return "devops";
    return "general";
};

export default function SkillsPage() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    skills.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 60);
    });
  }, []);

  return (
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <div
          key={skill}
          className={`skill-badge ${getCategory(skill)} ${
            visible.includes(i) ? "show" : ""
          }`}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
