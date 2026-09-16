export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
  imageAlt: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  levelBadge?: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  badge?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  label: string;
  displayValue?: string;
}

export const portfolioData = {
  profile: {
    name: "Nunn",
    role: "RPL Student & Aspiring Software Developer",
    schoolMajor: "Rekayasa Perangkat Lunak (RPL)",
    tagline: "nothing is impossible",
    availability: "Currently learning & building",
    shortDescription:
      "Saya adalah siswa RPL yang sedang belajar software development, web development, database, dan berbagai teknologi digital melalui project sekolah maupun project pribadi.",
    aboutParagraphs: [
      "Halo! Saya Nunn, seorang siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) dengan ketertarikan mendalam pada dunia pemrograman, logika aplikasi, dan pengembangan web modern.",
      "Bagi saya, coding adalah wadah untuk merealisasikan ide menjadi solusi nyata. Setiap baris kode yang ditulis merupakan proses eksperimen, memecahkan error, dan menyempurnakan alur sistem.",
      "Fokus saya saat ini adalah memperkuat fondasi logika pemrograman, arsitektur database relasional, serta eksplorasi ekosistem web modern untuk membangun aplikasi yang fungsional, bersih, dan bermanfaat."
    ],
    philosophy: {
      steps: ["Learn", "Build", "Break", "Fix", "Improve"],
      summary:
        "Proses belajar sejati lahir saat kita berani mencoba, menghadapi error, membedah solusinya, dan menghasilkan karya yang lebih baik dari kemarin."
    },
    keyHighlights: [
      { label: "Status", value: "Siswa SMK RPL" },
      { label: "Fokus Belajar", value: "Web Dev & Database" },
      { label: "Prinsip", value: "Clean & Authentic" },
      { label: "Motivasi", value: "Curiosity-Driven" }
    ]
  },

  skillsData: [
    {
      category: "Languages",
      description: "Bahasa pemrograman yang dipelajari di kurikulum RPL dan eksplorasi mandiri.",
      skills: [
        { name: "HTML", iconName: "html" },
        { name: "CSS", iconName: "css" },
        { name: "JavaScript", iconName: "javascript" },
        { name: "Java", iconName: "java" },
        { name: "PHP", iconName: "php" }
      ]
    },
    {
      category: "Framework / Library",
      description: "Teknologi modern untuk mempercepat pembuatan antarmuka dan logika web.",
      skills: [
        { name: "React", iconName: "react" },
        { name: "Next.js", iconName: "nextjs" },
        { name: "Node.js", iconName: "nodejs" },
        { name: "Tailwind CSS", iconName: "tailwind" },
        { name: "Bootstrap", iconName: "bootstrap" }
      ]
    },
    {
      category: "Database",
      description: "Penyimpanan dan perancangan data relasional untuk aplikasi terstruktur.",
      skills: [
        { name: "MySQL", iconName: "mysql" }
      ]
    },
    {
      category: "Tools & Workflow",
      description: "Perangkat kerja sehari-hari untuk coding, version control, dan desain UI.",
      skills: [
        { name: "Git", iconName: "git" },
        { name: "GitHub", iconName: "github" },
        { name: "VS Code", iconName: "vscode" },
        { name: "Figma", iconName: "figma" }
      ]
    }
  ] as SkillCategory[],

  currentlyLearning: [
    {
      title: "Next.js App Router & Server Components",
      detail: "Mempelajari rendering modern, optimasi routing, dan clean folder structure."
    },
    {
      title: "TypeScript Integration",
      detail: "Menerapkan static typing agar kode lebih aman dari runtime bug dan mudah di-maintain."
    },
    {
      title: "REST API & Backend Architecture",
      detail: "Menghubungkan frontend modern dengan endpoint data terstruktur dan validasi payload."
    },
    {
      title: "Database Normalization & Queries",
      detail: "Mendalami relasi tabel di MySQL, indexing, dan transaksi data yang efisien."
    }
  ],

  projects: [
    {
      id: "perpustakaan-rpl",
      title: "Sistem Informasi Perpustakaan",
      subtitle: "Full-Stack Web Management Application",
      description:
        "Aplikasi web manajemen perpustakaan sekolah dengan fitur lengkap: pencatatan inventaris buku, pendataan peminjam siswa, kalkulasi batas waktu pengembalian, dan riwayat sirkulasi berbasis database relasional.",
      tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      featured: true,
      demoUrl: "https://demo-perpustakaan.example.com",
      githubUrl: "https://github.com/nunn/sistem-perpustakaan-rpl",
      imageAlt: "Preview Sistem Informasi Perpustakaan Sekolah",
      highlights: [
        "Sistem CRUD terstruktur untuk data buku, anggota, dan transaksi",
        "Validasi input form dan pencegahan duplikasi data",
        "Dashboard admin ringkas untuk memantau buku yang sedang dipinjam"
      ]
    },
    {
      id: "kasir-sederhana",
      title: "Aplikasi Kasir Sederhana (POS)",
      subtitle: "Point of Sale & Inventory Tracking",
      description:
        "Sistem kasir ringan yang dirancang untuk kebutuhan koperasi siswa atau mini outlet. Menghitung total belanja, diskon, kembalian otomatis, serta mencetak struk ringkas.",
      tags: ["JavaScript", "React", "Tailwind CSS", "MySQL"],
      featured: false,
      demoUrl: "https://demo-pos.example.com",
      githubUrl: "https://github.com/nunn/kasir-sederhana-rpl",
      imageAlt: "Preview Aplikasi Kasir Sederhana",
      highlights: [
        "Kalkulasi total belanja dan kembalian secara real-time",
        "Manajemen keranjang belanja interaktif",
        "Pencatatan riwayat transaksi harian"
      ]
    },
    {
      id: "portal-ekskul-sekolah",
      title: "Web Portal Organisasi / Ekskul",
      subtitle: "School Community Landing Page",
      description:
        "Landing page responsif untuk kegiatan ekstrakurikuler IT di sekolah. Berisi agenda kegiatan, dokumentasi galeri, perkenalan pengurus, dan formulir pendaftaran anggota baru.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      featured: false,
      demoUrl: "https://demo-ekskul.example.com",
      githubUrl: "https://github.com/nunn/web-ekskul-it",
      imageAlt: "Preview Web Portal Organisasi Sekolah",
      highlights: [
        "Tampilan mobile-first yang responsif di berbagai ukuran layar",
        "Navigasi bersih dengan filter kategori kegiatan",
        "Formulir registrasi dengan validasi sisi klien"
      ]
    },
    {
      id: "portfolio-v1",
      title: "Personal Developer Portfolio v1",
      subtitle: "Personal Web Portfolio",
      description:
        "Versi awal portfolio berbasis HTML murni dan CSS modern untuk menampilkan tugas-tugas coding pertama dan latihan layout web responsif.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      featured: false,
      demoUrl: "https://portfolio-v1.example.com",
      githubUrl: "https://github.com/nunn/personal-portfolio-v1",
      imageAlt: "Preview Developer Portfolio v1",
      highlights: [
        "Eksperimen pertama dengan semantic HTML5 dan CSS Grid",
        "Dark theme minimalis dengan performa load yang instan"
      ]
    }
  ] as ProjectItem[],

  journeySteps: [
    {
      year: "2025",
      title: "Started Learning Programming",
      description:
        "Memasuki jurusan RPL, belajar logika pemrograman, algoritma dasar, dasar-dasar komputasi, serta fondasi web pertama dengan HTML & CSS.",
      status: "completed",
      badge: "Langkah Awal"
    },
    {
      year: "2026",
      title: "Web Development & Database",
      description:
        "Mendalami bahasa JavaScript & PHP, perancangan basis data relasional menggunakan MySQL, query SQL, serta pembuatan aplikasi web CRUD pertama.",
      status: "completed",
      badge: "Fondasi Utama"
    },
    {
      year: "2026",
      title: "Building Personal Projects",
      description:
        "Mengembangkan project nyata seperti Sistem Perpustakaan dan Aplikasi Kasir, serta mulai mengeksplorasi ekosistem modern seperti React, Next.js, dan Tailwind CSS.",
      status: "current",
      badge: "Fase Aktif"
    },
    {
      year: "NEXT",
      title: "Become a Better Software Developer",
      description:
        "Fokus memperdalam clean architecture, penguasaan TypeScript, integrasi backend API yang solid, dan siap berkontribusi pada project tim maupun industri.",
      status: "upcoming",
      badge: "Masa Depan"
    }
  ] as JourneyStep[],

  currentlyBuilding: {
    command: "npm run build",
    userPrompt: "nunn@portfolio:~$",
    outputLines: [
      "> portfolio@0.1.0 build",
      "> next build",
      "✓ Linting and type checking...",
      "✓ Generating static pages (SSG)...",
      "✓ Optimizing production bundles...",
      "Status: Building something new and sharpening software skills daily.",
      "[READY] Waiting for the next problem to solve."
    ],
    note: "Improving my web development skills and experimenting with new ideas."
  },

  contact: {
    heading: "LET'S BUILD SOMETHING.",
    subtext:
      "Have an idea, project, or just want to say hi? Saya selalu terbuka untuk berdiskusi seputar software development, berbagi ide project, atau belajar bersama.",
    email: "nunn.dev@example.com",
    whatsapp: "https://wa.me/6281234567890",
    whatsappNumber: "+62 812-3456-7890",
    github: "https://github.com/nunn",
    instagram: "https://instagram.com/nunn.dev",
    ctaText: "Get In Touch"
  },

  footer: {
    copyright: "© 2026 Powered by Nunn",
    builtWith: "Built with Next.js & Tailwind CSS.",
    tagline: "nothing is impossible"
  }
};
