import React from "react";
import { portfolioData } from "../data/portfolioData";
import {
  LayersIcon,
  Code2Icon,
  DatabaseIcon,
  CpuIcon,
  SparklesIcon,
  CheckCircle2Icon
} from "./icons";

export default function Skills() {
  const { skillsData, currentlyLearning } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2Icon className="w-4 h-4 text-blue-400" />;
      case "Framework / Library":
        return <LayersIcon className="w-4 h-4 text-sky-400" />;
      case "Database":
        return <DatabaseIcon className="w-4 h-4 text-cyan-400" />;
      case "Tools & Workflow":
      default:
        return <CpuIcon className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#090b12]/50 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <LayersIcon className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Teknologi &amp; Tools yang Dipelajari
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Berfokus pada pemahaman fundamental logika, basis data, dan ekosistem web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-xl bg-[#0c0f18] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 font-semibold text-white text-base">
                  {getCategoryIcon(cat.category)}
                  <span>{cat.category}</span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-normal">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800/90 text-xs font-medium text-slate-200 hover:border-blue-500/40 hover:text-blue-300 hover:bg-slate-800/60 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70"></span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{cat.skills.length} Technologies</span>
                <span className="text-blue-400/80">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Highlight Card */}
        <div className="mt-10 p-6 sm:p-7 rounded-xl bg-gradient-to-r from-blue-950/20 via-[#0d101a] to-slate-900/60 border border-blue-500/20 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                <SparklesIcon className="w-4 h-4 text-blue-400" />
                <span>Currently Learning</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Fokus Pendalaman Saat Ini
              </h3>
            </div>
            <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Q1-Q2 2026 Target
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between space-y-2 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
