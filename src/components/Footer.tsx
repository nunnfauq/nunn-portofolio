import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, MessageCircleIcon, MailIcon, InstagramIcon } from "./icons";

export default function Footer() {
  const { footer, contact } = portfolioData;

  return (
    <footer className="border-t border-slate-900 bg-[#06080d] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-white font-mono font-bold text-sm tracking-tight">
              nunn.dev
            </span>
            <span className="text-xs font-mono text-slate-500">
              — {footer.tagline}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            {footer.copyright} • {footer.builtWith}
          </p>
        </div>

        {/* Quick Nav Anchor links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#journey" className="hover:text-white transition-colors">
            Journey
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircleIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
