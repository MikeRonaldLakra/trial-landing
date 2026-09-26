import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App.tsx";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("ModeKeta AI: missing #root element");
}

function showBootError(error: unknown) {
  console.error("[ModeKeta AI] client runtime failed", error);

  const message =
    error instanceof Error
      ? `${error.name}: ${error.message}`
      : String(error);

  root.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;padding:32px;background:#06070b;color:#f7f8ff;font-family:ui-sans-serif,system-ui,sans-serif">
      <section style="width:min(720px,100%)">
        <div style="font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#a89cff">ModeKeta AI</div>
        <h1 style="font-size:36px;line-height:1.1;margin:12px 0">Client runtime failed</h1>
        <p style="color:#9aa2b5;line-height:1.7">The deployment loaded successfully, but the application threw an exception while rendering.</p>
        <pre style="white-space:pre-wrap;margin-top:20px;padding:16px;border-radius:12px;background:#10131b;color:#e8ebf5;overflow:auto">${message.replace(/</g, "&lt;")}</pre>
      </section>
    </main>
  `;
}

window.addEventListener("error", (event) => {
  if (event.error) showBootError(event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  showBootError(event.reason);
});

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ModeKeta AI] render failed", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="runtime-error">
          <section className="runtime-error-card">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              ModeKeta AI
            </div>
            <h1>Render failed</h1>
            <p>
              The deployment is running, but the React application threw an
              exception during rendering.
            </p>
            <pre>{this.state.error.message}</pre>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

createRoot(root).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
