import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nunn — RPL Student & Aspiring Software Developer",
  description:
    "Portfolio pribadi Nunn, siswa SMK jurusan Rekayasa Perangkat Lunak (RPL). Berfokus pada software development, web development, database, dan eksplorasi teknologi digital.",
  keywords: [
    "Nunn",
    "Portfolio RPL",
    "Rekayasa Perangkat Lunak",
    "SMK RPL",
    "Software Developer Student",
    "Web Development",
    "PHP MySQL",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Nunn" }],
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-[#090a10] text-slate-100 min-h-screen antialiased bg-grid-pattern selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
