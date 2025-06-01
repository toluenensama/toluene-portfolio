import {
  Mail,
  Phone,
  MapPin,
  LucideTwitter,
  LucideFacebook,
  LucideMessageCircle,
  Linkedin,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

import { useToast } from "../hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export function ContactSection() {
  const { toast } = useToast();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message, I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-md text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or want to colaborate? Feel free to get in
          touch. I am open for discussions and new oportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="gap-4 p-6 flex items-center shadow-xs card-hover">
              <div className="p-2 rounded-full text-primary bg-primary-foreground/10">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-sm gap-1 items-center justify-center">
                <p>Email</p>
                <p>toludaniel.ojo@gmail.com</p>
              </div>
            </div>
            <div className="gap-4 p-6 flex items-center shadow-xs card-hover">
              <div className="p-2 rounded-full text-primary bg-primary-foreground/10">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-sm gap-1 items-center justify-center">
                <p>Phone</p>
                <p>+2348143931331</p>
              </div>
            </div>
            <div className="gap-4 p-6 flex items-center shadow-xs card-hover">
              <div className="p-2 rounded-full text-primary bg-primary-foreground/10">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-sm gap-1 items-center justify-center">
                <p>Location</p>
                <p>Ota, Ogun State, NG</p>
              </div>
            </div>
            <div className="gap-4 p-6 flex items-center shadow-xs card-hover">
              <div className="flex flex-col mx-auto text-sm gap-2 items-center justify-center">
                <p>Connect with me</p>
                <div className="flex gap-1 items-center justify-center">
                  <a href="https://x.com/magetoluene">
                    <LucideTwitter className="h-6 w-6 text-muted-foreground" />
                  </a>
                  <a href="https://web.facebook.com/toluene.kirito/">
                    <LucideFacebook className="h-6 w-6 text-muted-foreground" />
                  </a>
                  <a href="https://wa.me/2347016682022">
                    <LucideMessageCircle className="h-6 w-6 text-muted-foreground" />
                  </a>
                  <a href="https://www.linkedin.com/in/toluwalogo-ojo-8508a7231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Linkedin className="h-6 w-6 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={form}
            className="bg-card shadow-xs card-hover rounded-lg p-8 "
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Send a Message
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium ">
                  Your name
                </label>
                <input
                  type="text"
                  className="bg-background focus:outline-0 focus:ring focus:ring-primary border border-input w-full px-6 py-2 rounded-xl"
                  placeholder="Your name...."
                  required
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium capitalize"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  className="bg-background focus:outline-0 focus:ring focus:ring-primary border border-input w-full px-6 py-2 rounded-xl"
                  placeholder="Email Address"
                  required
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium ">
                  Message
                </label>
                <textarea
                  type="text"
                  className="bg-background focus:outline-0 focus:ring focus:ring-primary border border-input w-full px-6 py-2 rounded-xl resize-none"
                  placeholder="Hi Tolu, I would like to....."
                  required
                  id="message"
                  name="message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button flex items-center mx-auto w-full gap-2 justify-center"
                )}
              >
                {isSubmitting ? "Sending..." : " Send Message"}{" "}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
