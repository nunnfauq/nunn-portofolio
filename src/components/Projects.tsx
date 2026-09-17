import React from "react";
import { portfolioData, ProjectItem } from "../data/portfolioData";
import {
  Code2Icon,
  ExternalLinkIcon,
  GithubIcon,
  SparklesIcon,
  CheckCircle2Icon,
  TerminalIcon
} from "./icons";

export default function Projects() {
  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const standardProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Code2Icon className="w-3.5 h-3.5" />
            <span>PROJECTS &amp; EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Project dan Eksperimen
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Karya dan eksplorasi web yang dikerjakan secara langsung, mulai dari latihan dasar hingga deployment nyata.
          </p>
        </div>

        {/* 1. Spotlighted / Prominent Featured Project */}
        {featuredProject && (
          <div className="mb-12 relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-sky-500/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />

            <div className="relative rounded-2xl bg-[#0c0f18] border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-mono font-semibold text-blue-300">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      FEATURED PROJECT
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      First Deployment Experiment
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-400 mt-1">
                      {featuredProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 pt-1">
                    {featuredProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <CheckCircle2Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-blue-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-xs sm:text-sm transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right: Modern Simulated App Window / Mockup Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-[#090b12] border border-slate-800 shadow-xl overflow-hidden">
                    {/* Simulated Browser Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#06080e] border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                      </div>
                      <div className="px-3 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-[240px]">
                        nunnfauq.github.io/starp.github.io
                      </div>
                      <div className="w-6"></div>
                    </div>

                    {/* App Visual Canvas */}
                    <div className="p-5 space-y-3 font-mono text-xs">
                      {/* Metric cards inside mock app */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Deploy Status</span>
                          <span className="text-base font-bold text-white">Live</span>
                          <span className="text-[9px] text-emerald-400 block mt-0.5">✓ GitHub Pages</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Metode</span>
                          <span className="text-base font-bold text-blue-400">Manual</span>
                          <span className="text-[9px] text-slate-400 block mt-0.5">Static HTML &amp; CSS</span>
                        </div>
                      </div>

                      {/* Mock Table / Site Preview */}
                      <div className="p-3.5 rounded-lg bg-slate-950/90 border border-slate-800/80 space-y-2">
                        <div className="flex justify-between text-[11px] text-slate-400 font-semibold border-b border-slate-800/60 pb-1.5">
                          <span className="text-blue-300">MiawpCode / Web Star</span>
                          <span className="text-emerald-400 text-[10px]">Active Hosting</span>
                        </div>
                        <p className="text-[11px] text-slate-200 font-sans italic">
                          &ldquo;Hello, miawp34 in here! Technology for future.&rdquo;
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1 text-[9px] text-slate-400">
                          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Pelayanan Nonstop</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1.412+ Review</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">© Nunn X 2026</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                        <span>Repo: nunnfauq/starp.github.io</span>
                        <span className="text-blue-400">First Deploy ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Standard Projects Grid (conditionally rendered if available) */}
        {standardProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-xl bg-[#0c0f18] border border-slate-800/90 hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Header / Mock Preview */}
                <div className="p-5 bg-gradient-to-br from-[#0e121e] to-[#090b12] border-b border-slate-800/80 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {proj.subtitle}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Highlights & Tags */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    {proj.highlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 text-blue-400 hover:text-white text-xs font-semibold transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-xs transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
