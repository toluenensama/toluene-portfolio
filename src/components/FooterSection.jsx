import { ArrowUp } from "lucide-react";

export function FooterSection() {
    return (
        <footer className="py-12 border border-t border-border flex justify-between items-center mt-12 pt-8 px-4 flex-wrap bg-card">
            <p className=" text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Toluene. All rights reserved.
            </p>
            <a href="#hero" className="bg-primary/20 p-2 rounded-full transition-colors duration-300 hover:bg-primary/40 ">
                <ArrowUp size={20} className="text-primary"/>
            </a>
        </footer>
    )
}