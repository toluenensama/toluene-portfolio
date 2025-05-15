import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "../components/StartBackground";
function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <section className="flex flex-col items-center justify-center gap-3 mx-auto min-h-screen container max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black">404  <span className="text-primary">error</span></h1>
        <p className="text-2xl capitalize text-muted-foreground">Page not found</p>
        <a href="/" className="text-lg text-muted-foreground cosmic-button">Let's help you back to civilization</a>
      </section>
    </div>
  );
}

export default NotFound;
