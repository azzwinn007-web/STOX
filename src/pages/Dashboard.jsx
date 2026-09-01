import { useState } from "react";

const stocks = {
  RELIANCE: {
    name: "Reliance Industries",
    price: "₹1,425.60",
    change: "+2.40%",
    momentum: "+18.6%",
    volume: "High",
  },

  TCS: {
    name: "Tata Consultancy Services",
    price: "₹3,412.20",
    change: "+1.72%",
    momentum: "+11.4%",
    volume: "High",
  },

  HDFCBANK: {
    name: "HDFC Bank",
    price: "₹1,982.40",
    change: "+0.86%",
    momentum: "+8.9%",
    volume: "Normal",
  },

  INFY: {
    name: "Infosys",
    price: "₹1,644.30",
    change: "+1.35%",
    momentum: "+13.1%",
    volume: "High",
  },
};

const chartPoints =
  "8,96 28,84 48,88 68,62 88,70 108,46 128,55 148,32 168,39 188,18 208,28 228,8";

function Dashboard({
  profile,
  onViewDetails,
  onLogout,
  backendStatus,
}) {
  const [analyzing, setAnalyzing] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedStock, setSelectedStock] = useState("RELIANCE");

  const [agentStatus, setAgentStatus] = useState({
    market: "waiting",
    research: "waiting",
    risk: "waiting",
  });

  const stock = stocks[selectedStock];

  const userName = profile?.name || "Investor";
  const userRisk = profile?.risk || "Medium";
  const userGoal =
    profile?.goal || "Long-term wealth creation";

  // ==========================================
  // AI ANALYSIS
  // ==========================================

  const handleAnalyze = () => {
    if (analyzing) return;

    setAnalyzing(true);

    setAgentStatus({
      market: "analyzing",
      research: "analyzing",
      risk: "analyzing",
    });

    setTimeout(() => {
      setAgentStatus({
        market: "completed",
        research: "analyzing",
        risk: "analyzing",
      });
    }, 700);

    setTimeout(() => {
      setAgentStatus({
        market: "completed",
        research: "completed",
        risk: "analyzing",
      });
    }, 1400);

    setTimeout(() => {
      setAgentStatus({
        market: "completed",
        research: "completed",
        risk: "completed",
      });

      setAnalyzing(false);
    }, 2100);
  };

  // ==========================================
  // AGENT STATUS
  // ==========================================

  const statusText = (status) => {
    if (status === "analyzing") {
      return "⟳ Analyzing...";
    }

    if (status === "completed") {
      return "✓ Completed";
    }

    return "○ Waiting";
  };

  // ==========================================
  // BACKEND STATUS
  // ==========================================

  const backendConnected =
    backendStatus &&
    !backendStatus.toLowerCase().includes("failed");

  return (
    <div className="dashboard-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="dashboard-header">

        <div className="brand">

          <div className="brand-icon">
            📈
          </div>

          <div>
            <h2>STOX</h2>

            <p>
              AI INVESTMENT INTELLIGENCE
            </p>
          </div>

        </div>

        <div className="header-actions">

          {/* BACKEND STATUS */}

          <div
            className={`backend-status ${
              backendConnected
                ? "backend-online"
                : "backend-offline"
            }`}
          >
            <span>
              ●
            </span>

            {backendConnected
              ? "AI Backend Online"
              : "Backend Offline"}
          </div>

          {/* PROFILE */}

          <div className="profile-wrapper">

            <button
              className="user-info profile-button"
              onClick={() =>
                setShowProfile(!showProfile)
              }
              type="button"
            >

              <div className="user-avatar">
                {userName
                  .substring(0, 2)
                  .toUpperCase()}
              </div>

              <div>

                <strong>
                  {userName}
                </strong>

                <small>
                  {userRisk} Risk Profile
                </small>

              </div>

              <span className="profile-arrow">
                {showProfile ? "▲" : "▼"}
              </span>

            </button>

            {/* PROFILE DROPDOWN */}

            {showProfile && (

              <div className="profile-dropdown">

                <div className="profile-dropdown-header">

                  <div className="large-avatar">
                    {userName
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>

                  <div>

                    <strong>
                      {userName}
                    </strong>

                    <small>
                      STOX Investor
                    </small>

                  </div>

                </div>

                <div className="profile-detail">

                  <span>
                    Risk Preference
                  </span>

                  <strong>
                    {userRisk}
                  </strong>

                </div>

                <div className="profile-detail">

                  <span>
                    Investment Goal
                  </span>

                  <strong>
                    {userGoal}
                  </strong>

                </div>

                <div className="profile-detail">

                  <span>
                    System Status
                  </span>

                  <strong>
                    {backendConnected
                      ? "Online"
                      : "Offline"}
                  </strong>

                </div>

                <button
                  className="logout-button"
                  onClick={onLogout}
                  type="button"
                >
                  ↪ Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </header>

      {/* ========================================
          MAIN
      ======================================== */}

      <main className="dashboard-container">

        {/* WELCOME */}

        <section className="dashboard-welcome">

          <div>

            <p className="eyebrow">
              PERSONALIZED INTELLIGENCE
            </p>

            <h1>
              AI Investment Dashboard
            </h1>

            <p>
              Welcome back, {userName}. STOX analyzes
              market signals, financial research and
              portfolio risk for you.
            </p>

          </div>

          <div className="welcome-badge">
            ● AI ONLINE
          </div>

        </section>

        {/* ========================================
            STOCK ANALYSIS
        ======================================== */}

        <section className="analysis-box">

          <label>
            Analyze a stock
          </label>

          <div className="stock-search">

            <div className="search-input">

              <span>
                🔍
              </span>

              <select
                value={selectedStock}
                onChange={(e) =>
                  setSelectedStock(e.target.value)
                }
              >

                {Object.entries(stocks).map(
                  ([symbol, item]) => (

                    <option
                      key={symbol}
                      value={symbol}
                    >
                      {symbol} — {item.name}
                    </option>

                  )
                )}

              </select>

            </div>

            <button
              className="primary-button analyze-button"
              onClick={handleAnalyze}
              disabled={analyzing}
              type="button"
            >

              {analyzing
                ? "Analyzing..."
                : "✨ Analyze with AI"}

            </button>

          </div>

        </section>

        {/* ========================================
            MARKET SNAPSHOT
        ======================================== */}

        <section className="dashboard-section">

          <div className="section-title">

            <h3>
              Market Snapshot
            </h3>

            <span>
              Live market data
            </span>

          </div>

          <div className="market-grid">

            {/* PRICE + GRAPH */}

            <div className="market-card market-main">

              <div>

                <strong>
                  {stock.price}
                </strong>

                <span>
                  {selectedStock}
                </span>

              </div>

              <svg
                className="line-chart"
                viewBox="0 0 240 110"
                preserveAspectRatio="none"
              >

                <polyline
                  points={chartPoints}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </div>

            {/* TODAY'S CHANGE */}

            <div className="market-card positive">

              <strong>
                {stock.change}
              </strong>

              <span>
                Today's Change
              </span>

              <b>
                ↗
              </b>

            </div>

            {/* MOMENTUM */}

            <div className="market-card">

              <strong>
                {stock.momentum}
              </strong>

              <span>
                30D Momentum
              </span>

              <div className="progress">

                <i
                  style={{
                    width: "78%",
                  }}
                />

              </div>

            </div>

            {/* VOLUME */}

            <div className="market-card">

              <strong>
                ↑ {stock.volume}
              </strong>

              <span>
                Volume Activity
              </span>

              <div className="bars">

                {[35, 65, 45, 78, 92].map(
                  (height, index) => (

                    <i
                      key={index}
                      style={{
                        height: `${height}%`,
                      }}
                    />

                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* ========================================
            AI AGENTS
        ======================================== */}

        <section className="dashboard-section">

          <div className="section-title">

            <h3>
              AI Agent Analysis
            </h3>

            <span>

              {!analyzing &&
              agentStatus.market === "completed"
                ? "✓ Analysis complete"
                : "3 specialized agents"}

            </span>

          </div>

          <div className="agents-grid">

            {[
              [
                "📈",
                "Market Agent",
                "bullish",
                "BULLISH",
                "82%",
                [
                  "Positive price momentum",
                  "Above-average trading volume",
                  "Short-term trend strength",
                ],
              ],

              [
                "📄",
                "Research Agent",
                "positive",
                "POSITIVE",
                "78%",
                [
                  "Recent earnings show stability",
                  "Financial filing reviewed",
                  "Business outlook remains positive",
                ],
              ],

              [
                "🛡",
                "Risk Agent",
                "risk",
                "MODERATE RISK",
                "81%",
                [
                  "Sector concentration detected",
                  "Market volatility considered",
                  "Matches investor risk profile",
                ],
              ],
            ].map(
              (
                [
                  icon,
                  title,
                  cls,
                  badge,
                  confidence,
                  bullets,
                ],
                index
              ) => {

                const key = [
                  "market",
                  "research",
                  "risk",
                ][index];

                return (

                  <div
                    className="agent-card"
                    key={title}
                  >

                    <div className="agent-title">

                      <h3>
                        {icon} {title}
                      </h3>

                      <span>
                        {statusText(
                          agentStatus[key]
                        )}
                      </span>

                    </div>

                    <span
                      className={`agent-status ${cls}`}
                    >
                      {badge}
                    </span>

                    <div className="confidence">

                      <strong>
                        {confidence}
                      </strong>

                      <small>
                        confidence
                      </small>

                    </div>

                    <ul>

                      {bullets.map(
                        (bullet) => (

                          <li key={bullet}>
                            ✓ {bullet}
                          </li>

                        )
                      )}

                    </ul>

                    {title ===
                      "Research Agent" && (

                      <button
                        className="source-button"
                        type="button"
                      >
                        📄 View source
                      </button>

                    )}

                  </div>

                );
              }
            )}

          </div>

        </section>

        {/* ========================================
            STOX SYNTHESIS
        ======================================== */}

        <section className="recommendation-section">

          <h3>
            STOX Synthesis
          </h3>

          <div className="recommendation-card">

            <div className="recommendation-main">

              <div className="recommendation-icon">
                🧠
              </div>

              <div>

                <span className="eyebrow">
                  AI CONSENSUS
                </span>

                <h2>
                  HOLD
                </h2>

                <p>
                  Synthesized from Market,
                  Research and Risk agents
                </p>

              </div>

            </div>

            <div className="recommendation-reasons">

              <div>
                ✓ Market signals are positive
              </div>

              <div>
                ✓ Recent research supports stability
              </div>

              <div>
                ⚠ Portfolio concentration limits
                aggressive exposure
              </div>

            </div>

            <button
              className="why-button"
              onClick={onViewDetails}
              type="button"
            >
              Why this result? →
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;