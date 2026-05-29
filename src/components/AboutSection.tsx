import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { tr } from "@/lib/i18n";
import { Info, X, Mail, User, Code as Code2 } from "lucide-react";

const DEV_NAME = "Al-Ma'tsurat Dev";
const DEV_EMAIL = "almatsuratdev@gmail.com";
const VERSION = "1.0.0";

export function AboutSection({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-2 text-foreground shadow-elegant hover:scale-105 transition-transform"
        aria-label={tr("aboutTitle", lang)}
      >
        <Info className="h-4 w-4" />
        <span className="hidden sm:inline text-sm">{tr("aboutTitle", lang)}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="ornate-border w-full max-w-sm rounded-2xl bg-card p-6 shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-bold text-foreground">
                {tr("aboutTitle", lang)}
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted"
                aria-label={tr("close", lang)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {tr("aboutDesc", lang)}
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-foreground">
                <User className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">{tr("aboutDev", lang)}:</span>
                <span className="font-semibold">{DEV_NAME}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <a
                  href={`mailto:${DEV_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {DEV_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Code2 className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">{tr("aboutVersion", lang)}:</span>
                <span className="font-mono font-semibold">{VERSION}</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-xl bg-primary py-2.5 text-center font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {tr("close", lang)}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
