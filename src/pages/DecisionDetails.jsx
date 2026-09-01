function DecisionDetails({ profile, onBack, onLogout }) {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="brand"><div className="brand-icon">📈</div><div><h2>STOX</h2><p>AI INVESTMENT INTELLIGENCE</p></div></div>
        <button className="logout-top" onClick={onLogout}>Logout</button>
      </header>
      <main className="dashboard-container details-page">
        <button className="back-button" onClick={onBack}>← Back to dashboard</button>
        <p className="eyebrow">DECISION EXPLAINABILITY</p>
        <h1>Why STOX says HOLD</h1>
        <p className="details-intro">The recommendation is designed around {profile?.name || "the investor"}'s {profile?.risk || "Medium"} risk preference and {profile?.goal || "investment goal"}.</p>

        <div className="decision-grid">
          <div className="decision-card"><span>📈</span><h3>Market signal</h3><strong>BULLISH · 82%</strong><p>Positive momentum and stronger trading activity support the current position.</p></div>
          <div className="decision-card"><span>📄</span><h3>Research signal</h3><strong>POSITIVE · 78%</strong><p>Recent earnings and financial information indicate a stable business outlook.</p></div>
          <div className="decision-card"><span>🛡</span><h3>Risk signal</h3><strong>MODERATE · 81%</strong><p>Portfolio concentration and volatility prevent an aggressive BUY recommendation.</p></div>
        </div>

        <div className="final-explanation">
          <div className="big-hold">HOLD</div>
          <div><h2>Balanced decision</h2><p>STOX combines the three agent outputs instead of relying on a single market signal. The result preserves exposure while respecting the investor's risk profile.</p></div>
        </div>
      </main>
    </div>
  );
}

export default DecisionDetails;