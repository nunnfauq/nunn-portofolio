# Nunn — Portfolio Personal Siswa SMK RPL

Website landing page portfolio modern untuk **Nunn**, siswa SMK jurusan Rekayasa Perangkat Lunak (RPL).
Dibuat dengan konsep visual **"DARK MINIMAL TECH — STUDENT DEVELOPER"**, merepresentasikan identitas student developer yang humble, otentik, dan serius mendalami software engineering.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 / React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Modern Vanilla CSS Variables
- **Icons**: Lucide Icons & Custom Reusable SVG Components
- **Font**: Inter & JetBrains Mono

---

## 📂 Struktur Project

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root Layout, SEO Metadata & Fonts
│   │   ├── page.tsx            # Main Landing Page
│   │   └── globals.css         # Dark theme, grid pattern, animations
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive header & mobile menu
│   │   ├── Hero.tsx            # Headline, live status badge, code preview card
│   │   ├── About.tsx           # Student story, philosophy Learn->Build->Break->Fix->Improve
│   │   ├── Skills.tsx          # Categorized skills & "Currently Learning" spotlight
│   │   ├── Projects.tsx        # Capstone featured project & RPL project cards
│   │   ├── LearningJourney.tsx # Timeline perjalanan belajar 2025 -> 2026 -> NEXT
│   │   ├── CurrentlyBuilding.tsx# Terminal build simulator
│   │   ├── Contact.tsx         # Direct connection channels & copy email action
│   │   ├── Footer.tsx          # Minimalist footer & copyright
│   │   └── icons.tsx           # Reusable Lucide SVG icons
│   └── data/
│       └── portfolioData.ts    # Pusat data konten (skills, project, bio, social)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🛠️ Cara Menjalankan Project

### 1. Menjalankan dengan Next.js Development Server
```bash
npm install
npm run dev
```
Buka browser di `http://localhost:3000`

### 2. Build untuk Production
```bash
npm run build
npm run start
```

### 3. Preview Server Lokal
Tersedia juga preview server ringan tanpa instalasi kompleks:
```bash
node preview-server.js
```
Akses di `http://localhost:3000`

---

## ✏️ Cara Kustomisasi Data Portofolio

Semua data telah dipisahkan ke dalam satu file terpusat:
📁 `src/data/portfolioData.ts`

- **Profil & Bio**: Edit objek `profile`
- **Daftar Skill**: Tambah/ubah di `skillsData`
- **Project Portofolio**: Tambah project baru di array `projects`
- **Kontak & Media Sosial**: Ganti nomor WhatsApp, akun GitHub, dan email di objek `contact`
