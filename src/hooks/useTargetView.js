import { useEffect } from "react";

let lastViewName = null;

export default function useTargetView(viewName) {
  useEffect(() => {
    if (!viewName) return;
    if (lastViewName === viewName) return;

    lastViewName = viewName;

    window.dispatchEvent(
      new CustomEvent("spa-view-change", {
        detail: {
          viewName,
          pageName: document.title,
          url: window.location.href

        }
      })
    );

    console.log(`[SPA] dispatched spa-view-change for "${viewName}"`);
  }, [viewName]);
}
