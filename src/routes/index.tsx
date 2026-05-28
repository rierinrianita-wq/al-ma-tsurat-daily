import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sessions, type SessionKey } from "@/data/dzikr";
import { DzikrCard } from "@/components/DzikrCard";
import { SessionToggle } from "@/components/SessionToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { DonateSection } from "@/components/DonateSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PWARegister } from "@/components/PWARegister";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { tr, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Ma'tsurat — Dzikir Pagi & Petang" },
      {
        name: "description",
        content:
          "Aplikasi dzikir pagi dan petang Al-Ma'tsurat dari Imam Hasan Al-Banna. Bilingual ID/EN, offline-ready PWA.",
      },
      { name: "theme-color", content: "#1a472a" },
      { property: "og:title", content: "Al-Ma'tsurat — Morning & Evening Dhikr" },
      {
        property: "og:description",
        content: "Hasan Al-Banna's Al-Ma'thurat — bilingual, beautifully designed, installable PWA.",
      },
    ],
    links: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/icon-192.svg" },
    ],
  }),
  component: Index,
});

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

type CountsState = { date: string; counts: Record<string, number> };

function Index() {
  const [lang, setLang] = useLocalStorage<Lang>("matsurat:lang", "id");
  const [session, setSession] = useLocalStorage<SessionKey>("matsurat:session", "morning");
  const [index, setIndex] = useState(0);
  const [state, setState] = useLocalStorage<CountsState>("matsurat:counts", {
    date: todayKey(),
    counts: {},
  });

  // Daily reset
  useEffect(() => {
    const today = todayKey();
    if (state.date !== today) setState({ date: today, counts: {} });
  }, [state.date, setState]);

  useEffect(() => setIndex(0), [session]);

  const list = useMemo(() => sessions[session], [session]);
  const current = list[index];
  const count = state.counts[current.id] ?? 0;

  const setCount = (id: string, fn: (n: number) => number) =>
    setState((s) => ({
      date: todayKey(),
      counts: { ...s.counts, [id]: Math.max(0, fn(s.counts[id] ?? 0)) },
    }));

  const totalProgress =
    list.reduce((acc, d) => acc + Math.min(d.repeat, state.counts[d.id] ?? 0), 0) /
    list.reduce((acc, d) => acc + d.repeat, 0);

  return (
    <div className="min-h-screen">
      <PWARegister />

      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/75 border-b border-border/60">
        <div className="mx-auto max-w-2xl px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold leading-none text-primary">
              {tr("appName", lang)}
            </h1>
            <p className="text-[11px] mt-1 text-muted-foreground">{tr("subtitle", lang)}</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle lang={lang} onChange={setLang} />
          </div>
        </div>
        <div className="h-1 w-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-[var(--gold)] to-primary transition-all"
            style={{ width: `${Math.round(totalProgress * 100)}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6 pb-32">
        <div className="flex justify-center mb-6">
          <SessionToggle session={session} onChange={setSession} lang={lang} />
        </div>

        <DzikrCard
          key={current.id}
          dzikr={current}
          lang={lang}
          count={count}
          onTap={() => setCount(current.id, (n) => n + 1)}
          onReset={() => setCount(current.id, () => 0)}
        />

        <nav className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-border bg-card text-sm font-semibold disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> {tr("prev", lang)}
          </button>
          <span className="text-xs text-muted-foreground font-mono">
            {index + 1} {tr("of", lang)} {list.length}
          </span>
          <button
            onClick={() => setIndex((i) => Math.min(list.length - 1, i + 1))}
            disabled={index === list.length - 1}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-40"
          >
            {tr("next", lang)} <ChevronRight className="h-4 w-4" />
          </button>
        </nav>

        <div className="mt-8 grid grid-cols-6 sm:grid-cols-8 gap-2">
          {list.map((d, i) => {
            const c = state.counts[d.id] ?? 0;
            const done = c >= d.repeat;
            return (
              <button
                key={d.id}
                onClick={() => setIndex(i)}
                className={`aspect-square rounded-lg text-xs font-mono font-bold transition-all ${
                  i === index
                    ? "bg-primary text-primary-foreground scale-105"
                    : done
                      ? "bg-accent/40 text-accent-foreground"
                      : "bg-card text-muted-foreground border border-border hover:bg-muted"
                }`}
                aria-label={`Dzikr ${i + 1}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </main>

      <DonateSection lang={lang} />
    </div>
  );
}
