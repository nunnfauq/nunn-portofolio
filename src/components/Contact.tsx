"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  MailIcon,
  MessageCircleIcon,
  GithubIcon,
  InstagramIcon,
  ArrowUpRightIcon,
  CopyIcon,
  CheckCircle2Icon,
  SparklesIcon
} from "./icons";

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const contactChannels = [
    {
      name: "Email",
      label: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MailIcon className="w-5 h-5 text-blue-400" />,
      actionText: "Send Mail",
      isEmail: true
    },
    {
      name: "WhatsApp",
      label: contact.whatsappNumber,
      href: contact.whatsapp,
      icon: <MessageCircleIcon className="w-5 h-5 text-emerald-400" />,
      actionText: "Chat WhatsApp",
      isEmail: false
    },
    {
      name: "GitHub",
      label: "github.com/nunnfauq",
      href: contact.github,
      icon: <GithubIcon className="w-5 h-5 text-slate-300" />,
      actionText: "View Profile",
      isEmail: false
    },
    {
      name: "Instagram",
      label: "@nunnwasd",
      href: contact.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-pink-400" />,
      actionText: "Follow",
      isEmail: false
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>LET&apos;S CONNECT</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
          {contact.heading}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
          {contact.subtext}
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            <span>{contact.ctaText}</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Direct Channels Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {contactChannels.map((channel) => (
            <div
              key={channel.name}
              className="p-5 rounded-xl bg-[#0c0e17] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  {channel.icon}
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">
                    {channel.name}
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                    {channel.label}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {channel.isEmail && (
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Salin alamat email"
                    aria-label="Salin email"
                  >
                    {copied ? (
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-4 h-4" />
                    )}
                  </button>
                )}

                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white transition-all"
                  aria-label={channel.actionText}
                  title={channel.actionText}
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {copied && (
          <p className="mt-4 text-xs font-mono text-emerald-400 animate-in fade-in duration-200">
            ✓ Alamat email berhasil disalin ke clipboard!
          </p>
        )}
      </div>
    </section>
  );
}
