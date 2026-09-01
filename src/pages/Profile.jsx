import { useState } from "react";

function Profile({ profile, onLogin }) {
  const [name, setName] = useState(profile?.name || "");
  const [risk, setRisk] = useState(profile?.risk || "Medium");
  const [goal, setGoal] = useState(profile?.goal || "Long-term wealth creation");

  const submit = (e) => {
    e.preventDefault();
    onLogin({ name: name.trim() || "Investor", risk, goal });
  };

  return (
    <div className="login-page">
      <div className="login-glow glow-one" />
      <div className="login-glow glow-two" />
      <div className="login-card">
        <div className="brand brand-centered">
          <div className="brand-icon">📈</div>
          <div>
            <h2>STOX</h2>
            <p>AI INVESTMENT INTELLIGENCE</p>
          </div>
        </div>

        <div className="login-copy">
          <span className="eyebrow">WELCOME TO STOX</span>
          <h1>Your AI investment copilot.</h1>
          <p>
            Build your investor profile and get a visual synthesis of market,
            research and risk signals.
          </p>
        </div>

        <form onSubmit={submit} className="profile-form">
          <label>
            Your name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          </label>

          <label>
            Risk preference
            <select value={risk} onChange={(e) => setRisk(e.target.value)}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>

          <label>
            Investment goal
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option>Long-term wealth creation</option>
              <option>Capital preservation</option>
              <option>Growth and appreciation</option>
              <option>Short-term opportunities</option>
            </select>
          </label>

          <button className="primary-button" type="submit">
            Login to STOX →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;