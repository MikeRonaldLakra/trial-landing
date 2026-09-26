import React, { useState } from "react";

const features = [
  {
    title: "Unified AI workflows",
    text: "Bring research, reasoning, generation, and execution into one focused workspace.",
    icon: "01",
  },
  {
    title: "Built for real work",
    text: "Turn ideas into polished deliverables without losing context between steps.",
    icon: "02",
  },
  {
    title: "Fast by default",
    text: "A clean interface designed to move from prompt to outcome with minimal friction.",
    icon: "03",
  },
  {
    title: "Adaptive intelligence",
    text: "Choose the depth you need, from quick answers to more deliberate problem solving.",
    icon: "04",
  },
];

const faqs = [
  {
    q: "What is ModeKeta AI?",
    a: "ModeKeta AI is an intelligent automation workspace for teams that want to move from ideas to finished work faster.",
  },
  {
    q: "Can I start without a paid plan?",
    a: "Yes. The product is designed around a low-friction entry point so you can explore the core workflow before committing.",
  },
  {
    q: "Does it work for technical teams?",
    a: "Yes. The experience is intended for builders as well as non-technical teams, with a workflow that can span research, writing, and implementation.",
  },
  {
    q: "Is the interface responsive?",
    a: "Yes. This landing page is designed to adapt cleanly across desktop, tablet, and mobile screens.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="nav shell">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">M</span>
          <span>
            ModeKeta<span className="brand-dot">.</span>AI
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Platform</a>
          <a href="#showcase" onClick={() => setMenuOpen(false)}>Workflow</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="mobile-cta" href="#pricing" onClick={() => setMenuOpen(false)}>Get started</a>
        </nav>

        <a className="nav-cta" href="#pricing">Get started</a>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Intelligent automation for modern teams</div>
            <h1>
              Move from
              <span className="gradient-text"> thought </span>
              to
              <span className="gradient-text"> outcome.</span>
            </h1>
            <p className="hero-subtitle">
              ModeKeta AI helps you research, build, write, and ship in one intelligent workspace.
              Less context switching. More meaningful progress.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pricing">Start building <span>↗</span></a>
              <a className="button button-secondary" href="#showcase">See how it works <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span>MK</span><span>AR</span><span>NS</span><span>+</span>
              </div>
              <div>
                <strong>Designed for momentum</strong>
                <span>One workspace. Fewer handoffs.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-card visual-card-main">
              <div className="visual-topbar">
                <span className="live-dot" /> NodeBeta intelligence
                <span className="mini-chip">LIVE</span>
              </div>
              <div className="visual-prompt">Build the next version of the workflow.</div>
              <div className="visual-lines">
                <span className="line line-long" /><span className="line line-mid" /><span className="line line-short" />
              </div>
              <div className="visual-response">
                <div className="response-badge">AI</div>
                <div>
                  <strong>Context assembled</strong>
                  <span>Research → reasoning → delivery</span>
                </div>
              </div>
              <div className="progress"><span /></div>
            </div>
            <div className="floating-note note-top"><span>01</span><div><strong>Understand</strong><small>intent + context</small></div></div>
            <div className="floating-note note-bottom"><span>03</span><div><strong>Deliver</strong><small>polished output</small></div></div>
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
          </div>
        </section>

        <section className="stats shell">
          <div><strong>01</strong><span>Focused workspace</span></div>
          <div><strong>24/7</strong><span>Always-on assistance</span></div>
          <div><strong>1→1</strong><span>Idea to execution</span></div>
          <div><strong>∞</strong><span>Room to iterate</span></div>
        </section>

        <section id="features" className="section shell">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-dot" /> Why ModeKeta</div>
            <h2>AI that stays with the work.</h2>
            <p>Designed around the full journey — not just the first answer.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-number">{feature.icon}</div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="showcase" className="showcase-section">
          <div className="shell showcase">
            <div className="showcase-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Workflow</div>
              <h2>From prompt to polished product.</h2>
              <p>
                Keep the important parts of the task connected. Explore, reason, create,
                refine — then ship the result without rebuilding the context from scratch.
              </p>
              <div className="workflow-list">
                <div className="workflow-item active"><span>01</span><div><strong>Understand</strong><small>Capture the real goal</small></div></div>
                <div className="workflow-item"><span>02</span><div><strong>Shape</strong><small>Structure the best path</small></div></div>
                <div className="workflow-item"><span>03</span><div><strong>Deliver</strong><small>Turn the plan into output</small></div></div>
              </div>
            </div>

            <div className="workflow-panel">
              <div className="panel-header"><span>Workspace</span><span>● Active</span></div>
              <div className="panel-body">
                <div className="panel-column">
                  <span className="panel-label">CONTEXT</span>
                  <div className="context-chip">Goal</div>
                  <div className="context-chip">Constraints</div>
                  <div className="context-chip">References</div>
                  <div className="context-chip">Decisions</div>
                </div>
                <div className="panel-main">
                  <span className="panel-label">CURRENT TASK</span>
                  <h3>Make the complex feel simple.</h3>
                  <p>Organize the next action, keep the useful details, and turn momentum into something tangible.</p>
                  <div className="panel-actions"><span>Draft</span><span>Refine</span><strong>Ship ↗</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section shell pricing-section">
          <div className="section-heading center">
            <div className="eyebrow"><span className="eyebrow-dot" /> Pricing</div>
            <h2>Start small. Scale when the work grows.</h2>
            <p>A clear entry point for individuals, with room for deeper workflows.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <span className="price-kicker">Matra</span>
              <h3>Starter</h3>
              <p>For focused everyday tasks and exploration.</p>
              <div className="price">₹600 <span>/ month</span></div>
              <a className="button button-secondary full" href="#top">Choose Matra</a>
              <div className="price-list"><span>✓ Core AI workspace</span><span>✓ Everyday workflows</span><span>✓ Responsive web experience</span></div>
            </article>
            <article className="price-card featured">
              <div className="featured-badge">Most flexible</div>
              <span className="price-kicker">Chitra</span>
              <h3>Standard</h3>
              <p>For heavier work that needs more depth and iteration.</p>
              <div className="price">₹1,500 <span>/ month</span></div>
              <a className="button button-primary full" href="#top">Choose Chitra</a>
              <div className="price-list"><span>✓ Everything in Matra</span><span>✓ Deeper reasoning workflows</span><span>✓ More room for complex builds</span></div>
            </article>
            <article className="price-card">
              <span className="price-kicker">Vajra</span>
              <h3>Advanced</h3>
              <p>For demanding workflows, larger builds, and high-volume use.</p>
              <div className="price">₹3,000 <span>/ month</span></div>
              <a className="button button-secondary full" href="#top">Choose Vajra</a>
              <div className="price-list"><span>✓ Everything in Chitra</span><span>✓ Highest workflow depth</span><span>✓ Designed for intensive usage</span></div>
            </article>
          </div>
        </section>

        <section id="faq" className="section shell faq-section">
          <div className="faq-layout">
            <div className="section-heading">
              <div className="eyebrow"><span className="eyebrow-dot" /> FAQ</div>
              <h2>Questions, answered.</h2>
              <p>Everything you need to understand the product at a glance.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <button
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                  key={faq.q}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div><strong>{faq.q}</strong>{openFaq === index && <p>{faq.a}</p>}</div>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="shell cta-card">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> Build with momentum</div>
              <h2>Make the next idea your next result.</h2>
              <p>Bring the work into one place and keep moving.</p>
            </div>
            <a className="button button-primary" href="#pricing">Get started <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark">M</span><span>ModeKeta<span className="brand-dot">.</span>AI</span></div>
        <div className="footer-links"><a href="#features">Platform</a><a href="#showcase">Workflow</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
        <span className="footer-note">© 2026 ModeKeta AI</span>
      </footer>
    </div>
  );
}

export default App;
