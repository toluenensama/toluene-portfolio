import {
  Code,
  Database,
  LucideSettings,

} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:text-start">
            <h3 className="font-semibold text-2xl">
              Passionate Programmer and Web Developer
            </h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aliquid asperiores natus tenetur aut, autem
              similique iure quod fugiat veritatis quibusdam aspernatur. Eius
              exercitationem culpa nihil vel voluptas quae explicabo adipisci
              quidem voluptatum deleniti reiciendis ducimus ut vitae, delectus
              fuga.
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              culpa nostrum ipsa soluta quidem aspernatur quod ducimus nihil,
              illo odio saepe porro quas ipsum consequatur in assumenda. Odio,
              molestiae commodi!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="py-2 px-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <LucideSettings className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Programming</div>
                  <div className="text-muted-foreground">
                    Providing solutions to problems with a variety of
                    technologies
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Web Development</div>
                  <div className="text-muted-foreground">
                    Developing Web Apps with fully responsive and interactive
                    user interfaces and amazing user experience
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    Database Management
                  </div>
                  <div className="text-muted-foreground">
                    Creating fully scalable CRUD systems for Web Apps and APIs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
