"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { TerminalIcon, CheckCircle2Icon, SparklesIcon } from "./icons";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = portfolioData;
  const [rebuilding, setRebuilding] = useState(false);

  const handleRebuild = () => {
    setRebuilding(true);
    setTimeout(() => {
      setRebuilding(false);
    }, 900);
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="rounded-2xl bg-[#0b0e17] border border-slate-800/90 shadow-2xl p-6 sm:p-8 relative">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <TerminalIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">
                  Status Aktif
                </span>
                <h3 className="text-lg font-bold text-white">
                  Currently Building
                </h3>
              </div>
            </div>

            <button
              onClick={handleRebuild}
              disabled={rebuilding}
              className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
              title="Simulasikan proses build"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  rebuilding ? "bg-amber-400 animate-spin" : "bg-emerald-400"
                }`}
              ></span>
              <span>{rebuilding ? "Compiling..." : "Run Re-build"}</span>
            </button>
          </div>

          {/* Note / Caption */}
          <p className="text-sm text-slate-300 mt-5 leading-relaxed">
            {currentlyBuilding.note}
          </p>

          {/* Terminal Box */}
          <div className="mt-5 rounded-xl bg-[#06080d] border border-slate-800 p-4 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-900">
              <span className="text-blue-400 font-semibold">{currentlyBuilding.userPrompt}</span>
              <span className="text-slate-100">{currentlyBuilding.command}</span>
            </div>

            <div className="pt-3 space-y-1.5 text-slate-400">
              {rebuilding ? (
                <div className="text-amber-400 animate-pulse">
                  &gt; Compiling packages and checking TypeScript types...
                </div>
              ) : (
                currentlyBuilding.outputLines.map((line, idx) => {
                  const isSuccess = line.startsWith("✓") || line.startsWith("[READY]");
                  const isCommand = line.startsWith(">");
                  return (
                    <div
                      key={idx}
                      className={
                        isSuccess
                          ? "text-emerald-400"
                          : isCommand
                          ? "text-slate-500"
                          : "text-slate-300"
                      }
                    >
                      {line}
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-500" />
                Build target: Next.js Production
              </span>
              <span>Node v22.x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
