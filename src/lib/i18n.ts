export type Lang = "id" | "en";

export const t = {
  appName: { id: "Al-Ma'tsurat", en: "Al-Ma'thurat" },
  subtitle: {
    id: "Dzikir Pagi & Petang — Hasan Al-Banna",
    en: "Morning & Evening Remembrance — Hasan Al-Banna",
  },
  morning: { id: "Pagi", en: "Morning" },
  evening: { id: "Petang", en: "Evening" },
  reset: { id: "Reset", en: "Reset" },
  done: { id: "Selesai", en: "Done" },
  tapToCount: { id: "Ketuk untuk menghitung", en: "Tap to count" },
  progress: { id: "Kemajuan", en: "Progress" },
  language: { id: "Bahasa", en: "Language" },
  donateTitle: {
    id: "Dukung pengembang",
    en: "Support the developer",
  },
  donateBody: {
    id: "Aplikasi ini gratis. Dukung pengembangnya ☕",
    en: "This app is free. Support the dev ☕",
  },
  install: { id: "Pasang Aplikasi", en: "Install App" },
  prev: { id: "Sebelumnya", en: "Previous" },
  next: { id: "Berikutnya", en: "Next" },
  of: { id: "dari", en: "of" },
  theme: { id: "Tema", en: "Theme" },
  aboutTitle: { id: "Tentang", en: "About" },
  aboutDev: { id: "Pengembang", en: "Developer" },
  aboutVersion: { id: "Versi", en: "Version" },
  aboutDesc: {
    id: "Aplikasi dzikir Al-Ma'tsurat Wazifah Sughra karya Imam Hasan Al-Banna. Dibuat untuk memudahkan umat muslim membaca dzikir pagi dan petang secara mobile.",
    en: "Al-Ma'tsurat Wazifah Sughra dhikr app by Imam Hasan Al-Banna. Built to help Muslims read morning and evening remembrances on mobile.",
  },
  close: { id: "Tutup", en: "Close" },
} as const;

export type Key = keyof typeof t;
export const tr = (k: Key, lang: Lang) => t[k][lang];
