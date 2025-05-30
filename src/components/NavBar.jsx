import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 bg-card/80 backdrop-blur-md transition-all duration-300",
          isScrolled
            ? "py-3 bg-card backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">toluene</span>{" "}
              Portfolio
            </span>
          </a>
          {/* nav desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((items, key) => (
              <a
                href={items.href}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {items.name}
              </a>
            ))}
          </div>

          {/* mobile nav */}
          <button
            className="z-50 p-2 text-foreground md:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X
                size={24}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            ) : (
              <Menu
                size={24}
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            )}
          </button>
          <div
            className={cn(
              "fixed bg-background/95 inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((items, key) => (
                <a
                  href={items.href}
                  key={key}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {items.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
