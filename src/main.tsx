import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App.tsx";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("ModeKeta AI: missing #root element");
}

try {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("[ModeKeta AI] client bootstrap failed", error);

  const message =
    error instanceof Error ? error.message : "Unknown client bootstrap error";

  root.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;padding:32px;background:#06070b;color:#f7f8ff;font-family:ui-sans-serif,system-ui,sans-serif">
      <section style="max-width:720px">
        <div style="font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#a89cff">ModeKeta AI</div>
        <h1 style="font-size:36px;margin:12px 0">Client boot failed</h1>
        <p style="color:#9aa2b5;line-height:1.7">The deployment is serving the page, but the React application could not start.</p>
        <pre style="white-space:pre-wrap;padding:16px;border-radius:12px;background:#10131b;color:#e8ebf5;overflow:auto">${message}</pre>
      </section>
    </main>
  `;
}
