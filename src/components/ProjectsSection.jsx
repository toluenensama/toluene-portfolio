import { ArrowLeft, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Tic tac toe",
    description: "A tic tac toe game web app built with tailwindcss and react",
    image: "/projects/tic-tac-toe.png",
    tags: ["TailwindCSS", "React", "JavaScript"],
    demoUrl: "https://tic-tac-toe-toluene.netlify.app/",
    GitHub: "https://github.com/toluenensama/tic-tac-toe-react",
  },

  {
    id: 2,
    title: "SkyLogs",
    description:
      "A weather app that shows weather forecast and current weather conditions for user's location or any city provided",
    image: "/projects/skylogs.png",
    tags: ["HTML/CSS", "API", "Flask", "Python", "Jinja"],
    demoUrl: "#",
    GitHub: "https://github.com/toluenensama/skylogs",
  },
  {
    id: 3,
    title: "Taskflow",
    description:
      "A to-do list app that allow multiple users to add, read,edit and delete daily tasks",
    image: "/projects/taskflow.png",
    tags: ["HTML/CSS", "SQL", "Flask", "Bootstrap", "Python", "Jinja"],
    demoUrl: "#",
    GitHub: "https://github.com/toluenensama/Taskflow/tree/master",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-5xl container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to details and functionality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs bg-primary/20 rounded-full font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.GitHub}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/toluenensama/"
            target="_blank"
            className="cosmic-button flex items-center gap-2 w-fit mx-auto"
          >
            Go to my GitHub <ArrowLeft size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
