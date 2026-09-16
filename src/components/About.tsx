import React from "react";
import { portfolioData } from "../data/portfolioData";
import { BookOpenIcon, SparklesIcon, CpuIcon, CheckCircle2Icon } from "./icons";

export default function About() {
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <BookOpenIcon className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Mengenal Saya &amp; Cara Belajar
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Siswa SMK RPL yang antusias membedah cara kerja sistem, logika web, dan database.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Short Paragraphs & Background */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {profile.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="text-slate-400">
                {para}
              </p>
            ))}

            {/* Philosophy Box: Learn -> Build -> Break -> Fix -> Improve */}
            <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#0e121c] border border-blue-500/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                <SparklesIcon className="w-4 h-4" />
                <span className="uppercase tracking-wider">Filosofi Belajar</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 my-3">
                {profile.philosophy.steps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs sm:text-sm font-mono font-semibold text-white">
                      {step}
                    </span>
                    {idx < profile.philosophy.steps.length - 1 && (
                      <span className="text-blue-500 font-bold text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-3 italic leading-normal">
                &ldquo;{profile.philosophy.summary}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Key Student Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CpuIcon className="w-4 h-4 text-blue-400" />
                <span>Student Highlights</span>
              </h3>

              <div className="grid grid-cols-2 gap-3.5">
                {profile.keyHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex flex-col justify-center"
                  >
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-200 mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mempelajari kurikulum resmi RPL: Algoritma, PBO (Java), Pemrograman Web &amp; Basis Data.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Membangun portfolio berbasis project nyata, bukan sekadar teori di kelas.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
