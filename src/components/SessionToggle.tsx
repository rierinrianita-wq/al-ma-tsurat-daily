import type { Lang } from "@/lib/i18n";
import { tr } from "@/lib/i18n";
import type { SessionKey } from "@/data/dzikr";
import { Sun, Moon } from "lucide-react";

export function SessionToggle({
  session,
  onChange,
  lang,
}: {
  session: SessionKey;
  onChange: (s: SessionKey) => void;
  lang: Lang;
}) {
  return (
    <div className="inline-flex rounded-full ornate-border p-1 shadow-elegant">
      <button
        onClick={() => onChange("morning")}
        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-display font-semibold transition-all ${
          session === "morning"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="h-4 w-4" /> {tr("morning", lang)}
      </button>
      <button
        onClick={() => onChange("evening")}
        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-display font-semibold transition-all ${
          session === "evening"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="h-4 w-4" /> {tr("evening", lang)}
      </button>
    </div>
  );
}
