import { useEffect } from "react";

export function PWARegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const inIframe = (() => {
      try {
        return window.self !== window.top;
      } catch {
        return true;
      }
    })();
    const host = window.location.hostname;
    const isPreviewHost =
      host.includes("lovableproject.com") ||
      host.includes("lovable.app") ||
      host.includes("localhost") ||
      host.includes("127.0.0.1");

    if (inIframe || isPreviewHost) {
      // Unregister any leftover SW in preview / iframe contexts
      navigator.serviceWorker?.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
      return;
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);
  return null;
}
