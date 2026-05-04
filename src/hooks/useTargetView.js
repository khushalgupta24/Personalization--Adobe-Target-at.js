import { useEffect } from "react";

function sanitizeViewName(viewName) {
  if (!viewName) return "home";

  return String(viewName)
    .trim()
    .replace(/^[/#]+|[/#]+$/g, "") || "home";
}

function waitForAtJs(maxAttempts = 20, delay = 250) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const check = () => {
      const canTrigger =
        typeof window !== "undefined" &&
        window.adobe &&
        window.adobe.target &&
        typeof window.adobe.target.triggerView === "function";

      if (canTrigger) {
        resolve();
        return;
      }

      attempts += 1;

      if (attempts >= maxAttempts) {
        reject(new Error("Adobe Target at.js is not available on window.adobe.target."));
        return;
      }

      window.setTimeout(check, delay);
    };

    check();
  });
}

export default function useTargetView({ viewName }) {
  useEffect(() => {
    const currentView = sanitizeViewName(viewName);
    let isCancelled = false;

    async function triggerView() {
      try {
        await waitForAtJs();

        if (isCancelled) {
          return;
        }

        window.adobe.target.triggerView(currentView);
        console.info(`[Target at.js] triggerView("${currentView}")`);
      } catch (error) {
        console.warn("[Target at.js] Unable to trigger SPA view:", error.message);
      }
    }

    triggerView();

    return () => {
      isCancelled = true;
    };
  }, [viewName]);
}
