import React from "react";
import { portfolioData } from "../data/portfolioData";
import { SparklesIcon, CheckCircle2Icon, ArrowRightIcon } from "./icons";

export default function LearningJourney() {
  const { journeySteps } = portfolioData;

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#090b12]/60 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>LEARNING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Perjalanan Belajar &amp; Milestone
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Proses langkah demi langkah dari mengenal sintaks pertama hingga membangun aplikasi mandiri.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {journeySteps.map((step, idx) => {
            const isCurrent = step.status === "current";
            const isUpcoming = step.status === "upcoming";

            return (
              <div key={idx} className="relative group">
                {/* Node Bullet */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-blue-600 border-blue-400 shadow-[0_0_12px_#3b82f6]"
                      : isUpcoming
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-950 border-emerald-500"
                  }`}
                >
                  {step.status === "completed" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  )}
                  {isUpcoming && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  )}
                </div>

                {/* Card */}
                <div
                  className={`p-5 sm:p-6 rounded-xl border transition-all ${
                    isCurrent
                      ? "bg-[#0e121e] border-blue-500/30 shadow-lg shadow-blue-500/5"
                      : "bg-[#0c0e17] border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                          isCurrent
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : isUpcoming
                            ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            : "bg-slate-900 text-slate-400 border border-slate-800"
                        }`}
                      >
                        {step.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    {step.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
