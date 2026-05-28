import type { Dzikr } from "@/data/dzikr";
import type { Lang } from "@/lib/i18n";
import { tr } from "@/lib/i18n";
import { Check, RotateCcw } from "lucide-react";

export function DzikrCard({
  dzikr,
  lang,
  count,
  onTap,
  onReset,
}: {
  dzikr: Dzikr;
  lang: Lang;
  count: number;
  onTap: () => void;
  onReset: () => void;
}) {
  const done = count >= dzikr.repeat;
  const pct = Math.min(100, (count / dzikr.repeat) * 100);

  return (
    <article className="ornate-border rounded-2xl bg-card shadow-elegant overflow-hidden">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border/60">
        <h2 className="font-display text-lg font-semibold text-foreground">{dzikr.title[lang]}</h2>
        <span className="text-xs font-mono px-2 py-1 rounded-full bg-accent/20 text-accent-foreground">
          {count}/{dzikr.repeat}
        </span>
      </header>

      <div className="px-6 py-8 text-right" dir="rtl">
        <p className="font-arabic text-3xl md:text-4xl text-foreground leading-loose">
          {dzikr.arabic}
        </p>
      </div>

      <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground italic font-body">
        {dzikr.translation[lang]}
      </div>

      <div className="px-6">
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--gold)] to-primary transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 p-4">
        <button
          onClick={onTap}
          disabled={done}
          className={`flex-1 py-4 rounded-xl font-display font-bold text-base transition-all active:scale-[0.98] ${
            done
              ? "bg-accent/30 text-accent-foreground cursor-default"
              : "bg-primary text-primary-foreground hover:opacity-95 shadow-elegant"
          }`}
        >
          {done ? (
            <span className="inline-flex items-center gap-2">
              <Check className="h-5 w-5" /> {tr("done", lang)}
            </span>
          ) : (
            tr("tapToCount", lang)
          )}
        </button>
        <button
          onClick={onReset}
          className="p-4 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label={tr("reset", lang)}
        >
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
}
