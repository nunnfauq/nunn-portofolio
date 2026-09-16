import React from "react";
import { portfolioData } from "../data/portfolioData";
import {
  GithubIcon,
  ArrowRightIcon,
  SparklesIcon,
  TerminalIcon,
  Code2Icon,
  CheckCircle2Icon
} from "./icons";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Glows (clean, not excessive) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-32 w-72 h-72 bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-slate-300">{profile.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                BUILDING IDEAS. <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  LEARNING EVERY DAY.
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-blue-400/90 tracking-wide pt-1 flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <span className="italic">&ldquo;{profile.tagline}&rdquo;</span>
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
              {profile.shortDescription}
            </p>

            {/* Badges / Student Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300">
                <Code2Icon className="w-3.5 h-3.5 text-blue-400" />
                SMK RPL
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300">
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                Web & Software Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300">
                <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                Hands-on Projects
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30"
              >
                <span>View Projects</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center justify-center p-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                title="Visit GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Developer Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Subtle Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-sky-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

              {/* Terminal Box */}
              <div className="relative rounded-xl bg-[#0d1017] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0c12] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <TerminalIcon className="w-3 h-3 text-slate-500" />
                    <span>student_profile.ts</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                  <p className="text-slate-500">// SMK RPL Student Specification</p>
                  <p>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-sky-300">developer</span>:{" "}
                    <span className="text-emerald-400">StudentProfile</span> = &#123;
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-amber-300">&quot;Nunn&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-amber-300">&quot;RPL Student & Aspiring Dev&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">tagline:</span>{" "}
                      <span className="text-amber-300">&quot;nothing is impossible&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">stack:</span> [
                      <span className="text-sky-300">&quot;Web&quot;</span>,{" "}
                      <span className="text-sky-300">&quot;PHP&quot;</span>,{" "}
                      <span className="text-sky-300">&quot;MySQL&quot;</span>,{" "}
                      <span className="text-sky-300">&quot;JS/React&quot;</span>],
                    </p>
                    <p>
                      <span className="text-slate-400">currentStatus:</span>{" "}
                      <span className="text-emerald-400">&quot;Building & Exploring&quot;</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">openToLearn:</span>{" "}
                      <span className="text-blue-400">true</span>
                    </p>
                  </div>
                  <p>&#125;;</p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2Icon className="w-3.5 h-3.5" />
                      Ready to build
                    </span>
                    <span className="font-mono">TypeScript v5.x</span>
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
