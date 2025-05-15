import { ArrowDown } from "lucide-react";
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1 ">
              Tolu
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 ml-2 text-gradient">
              Ojo
            </span>
          </h1>
          <p className="text-lg max-w-2xl text-muted-foreground md:text-xl animate-fade-in-delay-3 mx-auto opacity-0">
            I am a full-stack web developer, Specialized in
            creating both front-end and backend solutions. I build websites that
            are beautiful and as well as fully functional
          </p>
          <div className="animate-fade-in-delay-4 pt-4 opacity-0">
            <a href="#projects" className="cosmic-button">View My Work</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transform flex flex-col items-center justify-center">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
