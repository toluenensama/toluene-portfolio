import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 70, category: "language" },
  { name: "Python", level: 80, category: "language" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 50, category: "frontend" },
  { name: "jQuery", level: 50, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "RESTAPI", level: 80, category: "backend" },
  { name: "PostgresSQL", level: 80, category: "database management" },
  { name: "SQLlite", level: 80, category: "database management" },
  { name: "Flask", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
  { name: "Figma", level: 40, category: "tools" },
  { name: "passport.js", level: 50, category: "authentication & security" },
  { name: "bcrypt", level: 90, category: "authentication & security" },
  { name: "MS Word", level: 90, category: "text editing" },
  { name: "Google Docs", level: 85, category: "text editing" },
  { name: "Markdown", level: 70, category: "text editing" },
  { name: "EJS", level: 70, category: "templating" },
  { name: "Jinja", level: 70, category: "templating" },
  { name: "Vanilla JS", level: 80, category: "frontend" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "tools",
  "authentication & security", 
  "database management",
  "text editing",
  "language",
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
              }}
              className={cn(
                "px-6 py-2 rounded-full capitalize transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-secondary card-hover rounded-xl p-6 shadow-xs"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full rounded-full h-2 bg-card">
                <div
                  className="rounded-full origin-left animate-[grow_1.5s_ease-out] bg-primary h-2"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-muted-foreground text-sm">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
