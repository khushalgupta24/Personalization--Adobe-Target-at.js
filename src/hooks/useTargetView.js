import { useEffect } from "react";

let lastViewName = null;

function fireWhenReady(viewName, retries = 40) {
  if (window.adobe?.target?.triggerView) {
    window.requestAnimationFrame(() => {
      window.adobe.target.triggerView(viewName);
      console.log(`[at.js] triggerView("${viewName}")`);
    });
    return;
  }

  if (retries > 0) {
    window.setTimeout(() => fireWhenReady(viewName, retries - 1), 100);
  } else {
    console.warn(`[at.js] Target library not ready for view "${viewName}"`);
  }
}

export default function useTargetView(viewName) {
  useEffect(() => {
    if (!viewName) return;
    if (lastViewName === viewName) return;

    lastViewName = viewName;
    fireWhenReady(viewName);
  }, [viewName]);
}