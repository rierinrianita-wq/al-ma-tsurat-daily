import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { tr } from "@/lib/i18n";
import { Coffee, X, Heart } from "lucide-react";

const SAWERIA_URL = "https://saweria.co/sisterdevop";

export function DonateSection({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-accent-foreground font-semibold shadow-elegant hover:scale-105 transition-transform"
        aria-label={tr("donateBtn", lang)}
      >
        <Coffee className="h-4 w-4" />
        <span className="hidden sm:inline text-sm">{tr("donateBtn", lang)}</span>
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
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {tr("donateTitle", lang)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{tr("donateBody", lang)}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5">
              <a
                href={SAWERIA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F9A825] text-[#1a1a2e] py-3 font-display font-semibold hover:opacity-95 transition-opacity"
              >
                <Heart className="h-5 w-5" />
                {tr("donateBtn", lang)}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
